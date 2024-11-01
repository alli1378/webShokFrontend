import  Header  from './Header'
import Slideshow from './Carousel'
import ArticleSlide from './ArticleSlide'
const Slideshoww = () => {
    // const classes = useStyles();
    return (
        <>
        
        {/* <Header></Header> */}
            <div class="container-fluid mt-3">
                <div class="row d-flex justify-content-center">
                    <div className="col-lg-10  col-12">
                        <ArticleSlide></ArticleSlide>
                        </div>
                        <div className="col-lg-10  col-12">
                        <Slideshow></Slideshow>
                        </div>
                        
                        
                               </div>
            </div>
        </>
        
       
        )

    }
    export default Slideshoww
    