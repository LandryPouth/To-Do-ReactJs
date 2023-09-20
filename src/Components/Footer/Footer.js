function Footer() {
    return (
        <div>
            <form 
                className="px-4 md:px-8 lg:px-14 w-full h-20 fixed shadow-inner bottom-0 bg-violet-100 flex items-center justify-between"
            >
                <input 
                    type="text" 
                    placeholder="Entrez votre tâche..."
                    maxLength="40"
                    className="h-10 w-9/12 md:w-10/12 lg:w-11/12 bg-violet-100 border-b-2 border-gray-300 outline-none text-xl text-gray-600"
                />
                <button 
                    type="submit"
                    className="bg-violet-600 hover:bg-violet-800 px-4 py-2 rounded text-white font-bold"
                >
                    Ajouter
                </button>
            </form>
        </div>
    );
}

export default Footer;