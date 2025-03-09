using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Windows;
using System.Windows.Controls;
using WpfApp1.Data;
using System.ComponentModel;

namespace WpfApp1.Views
{
    /// <summary>
    /// Interaction logic for AlbumsPage.xaml
    /// </summary>
    public partial class AlbumsPage : Page, INotifyPropertyChanged
    {
        private ChinookContext _context;

        public event PropertyChangedEventHandler PropertyChanged;

        public AlbumsPage()
        {
            InitializeComponent();
            _context = new ChinookContext();
            DataContext = this;
        }

        private void Page_Loaded(object sender, RoutedEventArgs e)
        {
            // Load all albums with their related artist information
            AlbumsListView.ItemsSource = _context.Albums
                .Include(a => a.Artist)
                .ToList();
        }

        protected void OnPropertyChanged(string propertyName)
        {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
        }
    }
}