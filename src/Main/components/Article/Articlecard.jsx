import React from 'react'

const Articlecard = ({Article}) => {
    return (
            
            <div key={Article.id} className="  col-md-3  col-sm-6    ">
                                
                                <div class="article-card-graid   ">
                                    <div class='article-card' >
                                        
                                        <img src={`${Article.thumbnail}`}  alt="" />
                                        <div class="articel-description">
                                            <button class=" article-button "> {Article.title}</button>
                                            <p className='rtl'  >
                                                {
                                                    Article.description.length >= 30 ?
                                                        Article.description
                                                    :
                                                        Article.description
        
                                                    
                                                }                                 </p>
                                        </div> 
                                    </div>
        
        
                                </div>
        
                            </div>
                            
    
    )
}

export default Articlecard
