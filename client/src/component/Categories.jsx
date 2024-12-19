const Categories = () => {
    return (
        <>
            <h1 className="text-xl text-center py-2 font-bold text-gray-900">Browse Categories</h1>
            <div className="pb-12 p-3 grid gap-2 mb-5 grid-cols-2 md:grid-cols-3 md:gap-6">
                <section className="border border-black p-6 py-16 bg-red-400 rounded-xl">
                    RnB
                </section>
                <section className="border border-black p-6 py-16 bg-blue-300 rounded-xl">
                    Pop
                </section>
                <section className="border border-black p-6 py-16 bg-yellow-500 rounded-xl">
                    Afro
                </section>
                <section className="border border-black p-6 py-16 bg-amber-700 rounded-xl">
                    Rap
                </section>
                <section className="border border-black p-6 py-16 bg-violet-300 rounded-xl">
                    Soul
                </section>
                <section className="border border-black p-6 py-16 bg-indigo-500 rounded-xl">
                    Jazz
                </section>
                <section className="border border-black p-6 py-16 bg-emerald-500 rounded-xl">
                    Electric
                </section>
                <section className="border border-black p-6 py-16 bg-teal-900 rounded-xl">
                    Regae
                </section>
                <section className="border border-black p-6 py-16 bg-orange-200 rounded-xl">
                    Gospel
                </section>
                <section className="border border-black p-6 py-16 bg-red-950 rounded-xl">
                    Trap
                </section>
                <section className="border border-black p-6 py-16 bg-pink-500 rounded-xl">
                    Rock
                </section>
                <section className="border border-black p-6 py-16 bg-purple-600 rounded-xl">
                    Metal
                </section>
            </div>
        </>
    )
}

export default Categories;