'use server';

/**
 * @param {Object} data 
 */
export async function submitContactForm(data) {
  
  console.log('Form submission received:');
  console.log('Name:', data.name);
  console.log('Email:', data.email);
  console.log('Message:', data.message);
  
 
  
  return { success: true };
}