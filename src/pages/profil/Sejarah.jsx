import kantorDesa from "/kantor-desa.jpg"

export default function Sejarah() {
    return (
        <div className="w-full">
            <h1 className="text-red-700 text-3xl text-center font-bold mb-10">Sejarah Desa</h1>
            <img src={kantorDesa} alt="Kantor Desa" className="w-100 mx-auto rounded-xl shadow-black/20 shadow-md mb-10" />
            <div className="flex justify-center items-start gap-10">
                <div className="w-6/12">
                    <p className="text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non accusantium quas magni neque illo sit quidem nihil, harum atque amet deserunt provident sed voluptatibus. Modi possimus incidunt fuga saepe voluptates.</p>
                    <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis suscipit ad esse ea tempora consectetur aspernatur quisquam quasi ipsa maxime, nam officiis dicta debitis totam est excepturi architecto? Tempora maxime officiis, maiores nobis repudiandae explicabo animi commodi eligendi alias, sequi facere fugit impedit suscipit non veritatis soluta vero vel omnis!</p>
                    <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sit tempora totam maiores eligendi molestiae fugit consequatur ab nam cupiditate?</p>
                    <p className="text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam nisi consequuntur minima laudantium assumenda, explicabo maxime error asperiores itaque voluptates vel reprehenderit, nihil dicta. Similique, quia. Debitis quibusdam magni est. Excepturi, reprehenderit. Veniam quibusdam doloremque dolorum rem debitis, placeat corporis.</p>
                    <p className="text-justify"></p>
                </div>
                <div className="w-6/12">
                    <p className="text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. In iusto eligendi dicta sunt omnis quibusdam et doloribus consequatur, fugiat accusamus ab laudantium ratione dolorem eum est iure ducimus porro illum nihil, ex similique velit! Ipsam quo facilis quibusdam itaque sed quos rem vitae incidunt expedita, commodi possimus non nisi dolor, corporis vel nemo unde! Reprehenderit vero atque dicta mollitia et enim eius eos? Quo ea distinctio placeat, earum officiis saepe at. Harum, ipsum. Enim nostrum dolorum sequi quis exercitationem distinctio, aspernatur quibusdam atque unde vel alias quisquam. Architecto eos mollitia sequi saepe, iusto commodi provident neque, aspernatur illum possimus cupiditate!</p>
                    <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, quasi id! Ex cum aspernatur officia non totam ad aliquam animi quae possimus eveniet, ea eligendi adipisci distinctio ut sed harum.</p>
                    <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, rerum.</p>
                    <p className="text-justify"></p>
                </div>
            </div>
        </div>
    )
}