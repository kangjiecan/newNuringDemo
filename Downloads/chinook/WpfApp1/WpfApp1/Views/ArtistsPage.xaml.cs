using System.Linq;
using System.Windows;
using System.Windows.Controls;
using WpfApp1.Data;
using System.ComponentModel;

namespace WpfApp1.Views
{
    /// <summary>
    /// Interaction logic for ArtistsPage.xaml
    /// </summary>
    public partial class ArtistsPage : Page, INotifyPropertyChanged
    {
        private ChinookContext _context;

        public event PropertyChangedEventHandler PropertyChanged;

        public ArtistsPage()
        {
            InitializeComponent();
            _context = new ChinookContext();
            DataContext = this;
        }

        private void Page_Loaded(object sender, RoutedEventArgs e)
        {
            // Load all artists from the database
            ArtistsListView.ItemsSource = _context.Artists.ToList();
        }

        protected void OnPropertyChanged(string propertyName)
        {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
        }
    }
}