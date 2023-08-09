export default function SearchForm({search, setSearch, posts}) {
    return <form>
        <input type={"search"} name={'q'}
               value={search ? search : ''}
               onChange={(e) => setSearch(e.target.value)}
               className={
                   "w-full px-4 py-2 text-gray-900 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:bg-gray-50 mb-2"
               } placeholder={'search...'}/>

        <span className={
            "text-sm font-medium text-gray-900 tracking-wide font-display dark:text-gray-100"
        }>
            Showing
            <span className="font-semibold text-gray-900"> {posts.length} </span>
            {posts.length > 1 ? 'posts' : 'post'}
            {
                search && (
                    <span
                        className="font-semibold text-gray-900"> for search term: {search} </span>
                )
            }
        </span>
    </form>
}
