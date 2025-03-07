import tensorflow as tf
from transformers import TFAutoModelForSeq2SeqLM, AutoTokenizer

model_name = "google/flan-t5-base"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = TFAutoModelForSeq2SeqLM.from_pretrained(model_name)

def respond(user_input):
    input_text = f"Answer this question clearly and accurately: {user_input}"
    inputs = tokenizer(input_text, return_tensors="tf", padding=True)
    outputs = model.generate(
        inputs["input_ids"],
        max_length=100,
        min_length=10,
        do_sample=True,
        temperature=0.7,
        top_p=0.9,
        num_beams=4,
        no_repeat_ngram_size=2,
        early_stopping=True
    )
    response = tokenizer.decode(outputs[0], skip_special_tokens=True)
    return response

def main():
    print("Pure Model Chatbot initialized! Type 'quit' to exit.")
    print("All responses come directly from the model with no predefined answers.")
    while True:
        user_input = input("You: ")
        if user_input.lower() in ["quit", "exit", "bye"]:
            break
        response = respond(user_input)
        print(f"Chatbot: {response}")

if __name__ == "__main__":
    main()