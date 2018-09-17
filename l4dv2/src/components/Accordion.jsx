import React from 'react';

const Accordion = () => {
    return (<section>
        <div id="accordion">
            <div className="card bg-dark">
                <div className="card-header" id="headingOne">
                    <h5 className="mb-0">
                        <div data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <i className="fas fa-question-circle mr-2"></i>What is the purpose of this website
                        </div>
                    </h5>
                </div>

                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                    <div className="card-body faq-text">
        Objectively innovate empowered manufactured products whereas parallel platforms.Holisticly predominate extensible testing procedures
        for reliable supply chains.Completely synergize resource taxing relationships via premier niche markets.Professionally cultivate one - to - one customer service with robust ideas.Dynamically innovate resource - leveling customer service
        for state of the art customer serviceCompletely synergize resource taxing relationships via premier niche markets.Professionally cultivate one - to - one customer service with robust ideas.Dynamically innovate resource - leveling customer service
        for state of the art customer service
                    </div>
                </div>
  </div>
  <div className="card bg-dark">
    <div className="card-header" id="headingTwo">
      <h5 className="mb-0">
        <div className="collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          <i className="fas fa-question-circle mr-2"></i>Do you only accept laptops
        </div>
      </h5>
    </div>
    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
      <div className="card-body faq-text">
                Objectively innovate empowered manufactured products whereas parallel platforms.Holisticly predominate extensible testing procedures
                for reliable supply chains.Completely synergize resource taxing relationships via premier niche markets.Professionally cultivate one - to - one customer service with robust ideas.Dynamically innovate resource - leveling customer service
                for state of the art customer serviceCompletely synergize resource taxing relationships via premier niche markets.Professionally cultivate one - to - one customer service with robust ideas.Dynamically innovate resource - leveling customer service
                for state of the art customer service
      </div>
    </div>
  </div>
  <div className="card bg-dark">
    <div className="card-header" id="headingThree">
      <h5 className="mb-0">
        <div className="collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          <i className="fas fa-question-circle mr-2"></i>How many laptops can i donate
        </div>
      </h5>
    </div>
    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
      <div className="card-body faq-text">
        Objectively innovate empowered manufactured products whereas parallel platforms.Holisticly predominate extensible testing procedures
        for reliable supply chains.Completely synergize resource taxing relationships via premier niche markets.Professionally cultivate one - to - one customer service with robust ideas.Dynamically innovate resource - leveling customer service
        for state of the art customer serviceCompletely synergize resource taxing relationships via premier niche markets.Professionally cultivate one - to - one customer service with robust ideas.Dynamically innovate resource - leveling customer service
        for state of the art customer service
      </div>
    </div>
  </div>
</div>
</section>
  );
}

export default Accordion;