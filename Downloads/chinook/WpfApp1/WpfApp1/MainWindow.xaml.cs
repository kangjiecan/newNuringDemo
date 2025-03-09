using System;
using System.Windows;
using System.Windows.Controls;
using WpfApp1.Views;

namespace WpfApp1
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();

            // Navigate to Home page when application starts
            NavigateToHome();
        }

        private void NavigateToHome_Click(object sender, RoutedEventArgs e)
        {
            NavigateToHome();
        }

        private void NavigateToArtists_Click(object sender, RoutedEventArgs e)
        {
            MainFrame.Navigate(new ArtistsPage());
        }

        private void NavigateToAlbums_Click(object sender, RoutedEventArgs e)
        {
            MainFrame.Navigate(new AlbumsPage());
        }

        private void NavigateToTracks_Click(object sender, RoutedEventArgs e)
        {
            MainFrame.Navigate(new TracksPage());
        }

        private void NavigateToHome()
        {
            MainFrame.Navigate(new HomePage());
        }

        private void ExitMenuItem_Click(object sender, RoutedEventArgs e)
        {
            Application.Current.Shutdown();
        }
    }
}