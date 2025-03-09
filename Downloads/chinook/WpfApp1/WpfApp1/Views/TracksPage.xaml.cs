using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Windows;
using System.Windows.Controls;
using WpfApp1.Data;
using System.ComponentModel;

namespace WpfApp1.Views
{
    /// <summary>
    /// Interaction logic for TracksPage.xaml
    /// </summary>
    public partial class TracksPage : Page, INotifyPropertyChanged
    {
        private ChinookContext _context;

        public event PropertyChangedEventHandler PropertyChanged;

        public TracksPage()
        {
            InitializeComponent();
            _context = new ChinookContext();
            DataContext = this;
        }

        private void Page_Loaded(object sender, RoutedEventArgs e)
        {
            // Load tracks with related album and genre information
            // Limit to 100 tracks for performance
            TracksListView.ItemsSource = _context.Tracks
                .Include(t => t.Album)
                .Include(t => t.Genre)
                .Include(t => t.MediaType)
                .Take(100)
                .ToList();
        }

        protected void OnPropertyChanged(string propertyName)
        {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
        }
    }
}