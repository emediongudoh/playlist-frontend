import PropTypes from 'prop-types';

function SearchForm({
    playlistUrl,
    handleUrlChange,
    handleDownload,
    downloading,
}) {
    return (
        <form
            onSubmit={handleDownload}
            className='flex flex-col sm:flex-row'
        >
            <input
                type='url'
                placeholder='Enter Playlist URL'
                value={playlistUrl}
                onChange={handleUrlChange}
                className='w-full border-none bg-charleston_green px-6 py-4 outline-none sm:w-96'
            />
            <button
                type='submit'
                className='w-full bg-brand_color p-4 text-chinese_black transition duration-300 hover:bg-brand_color_2 sm:w-fit'
            >
                {downloading ? 'Downloading...' : 'Download playlist'}
            </button>
        </form>
    );
}

SearchForm.propTypes = {
    playlistUrl: PropTypes.string.isRequired,
    handleUrlChange: PropTypes.func.isRequired,
    handleDownload: PropTypes.func.isRequired,
    downloading: PropTypes.bool.isRequired,
};

export default SearchForm;
