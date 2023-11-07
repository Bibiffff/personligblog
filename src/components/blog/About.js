import LiaPic from "../img/itzy_lia_profile.jpg";


const About = () => {

    return (
        <div className="row px-5 py-3">
            <div className="col-12 col-lg-4">
                <img src={LiaPic} className="img-fluid" />
            </div>
            <div className="col-12 col-lg-6">
                <h1 className="text-lg-start text-center">Lorem</h1>
                <p className="text-lg-start text-center"> Aenean eget libero eu risus pretium iaculis sed sit amet erat. Maecenas eleifend nisl imperdiet sem lobortis, id ultricies tellus condimentum. Cras sagittis lorem eget mauris vestibulum, sed finibus lorem fringilla. Suspendisse accumsan, ante in fringilla ultricies, neque quam pretium tortor, nec vulputate justo purus eu nibh. Aenean nisi nisl, commodo et porttitor at, mollis in justo. Fusce ac metus sit amet neque pulvinar ornare. Proin quis quam ut mauris congue auctor. Nunc tempor aliquet orci in hendrerit.
                </p>
                <p className="text-lg-start text-center">
                Aenean eget libero eu risus pretium iaculis sed sit amet erat. Maecenas eleifend nisl imperdiet sem lobortis, id ultricies tellus condimentum. Cras sagittis lorem eget mauris vestibulum, sed finibus lorem fringilla. Suspendisse accumsan, ante in fringilla ultricies, neque quam pretium tortor, nec vulputate justo purus eu nibh. Aenean nisi nisl, commodo et porttitor at, mollis in justo. Fusce ac metus sit amet neque pulvinar ornare. Proin quis quam ut mauris congue auctor. Nunc tempor aliquet orci in hendrerit.
                </p>
            </div>


            <div className="row px-5 pt-3">

            </div>
        </div>
    );
};

export default About;