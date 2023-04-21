let dots=document.querySelector(".dot");
let sections = gsap.utils.toArray(".panel"),
    currentSection = sections[0];

gsap.defaults({overwrite: 'auto', duration: 0.3});

// stretch out the body height according to however many sections there are. 
gsap.set("body", {height: (sections.length * 100) + "%"});

// create a ScrollTrigger for each section
sections.forEach((section, i) => {
  ScrollTrigger.create({
    // use dynamic scroll positions based on the window height (offset by half to make it feel natural)
    start: () => (i - 0.5) * innerHeight,
    end: () => (i + 0.5) * innerHeight,
    // when a new section activates (from either direction), set the section accordinglyl.
    onToggle: self => self.isActive && setSection(section)
  
  });
});

para()
pare()
circle()

function circle(){

}


function setSection(newSection) {
  if (newSection !== currentSection) {
    gsap.to(currentSection, {scale: 0.8, autoAlpha: 0})
    gsap.to(newSection, {scale: 1, autoAlpha: 1});
    currentSection = newSection;
  }
}

function para(){
let sectionss = gsap.utils.toArray(".para"),
    current = sectionss[0];

gsap.defaults({overwrite: 'auto', duration: 0.3});

// stretch out the body height according to however many sectionss there are. 
gsap.set("body", {height: (sectionss.length * 100) + "%"});

// create a ScrollTrigger for each section
sectionss.forEach((section, i) => {
  ScrollTrigger.create({
    // use dynamic scroll positions based on the window height (offset by half to make it feel natural)
    start: () => (i - 0.5) * innerHeight,
    end: () => (i + 0.5) * innerHeight,
    // when a new section activates (from either direction), set the section accordinglyl.
    onToggle: self => self.isActive && setSection(section)
  });
});

function setSection(newSection) {
  if (newSection !== current) {
    gsap.to(current, {scale: 0.8, autoAlpha: 0})
    gsap.to(newSection, {scale: 1, autoAlpha: 1});
    current = newSection;
  }
}
}

function pare(){
  let sectionss = gsap.utils.toArray(".pare"),
      current = sectionss[0];
  
  gsap.defaults({overwrite: 'auto', duration: 0.3});
  
  // stretch out the body height according to however many sectionss there are. 
  gsap.set("body", {height: (sectionss.length * 100) + "%"});
  
  // create a ScrollTrigger for each section
  sectionss.forEach((section, i) => {
    ScrollTrigger.create({
      // use dynamic scroll positions based on the window height (offset by half to make it feel natural)
      start: () => (i - 0.5) * innerHeight,
      end: () => (i + 0.5) * innerHeight,
      // when a new section activates (from either direction), set the section accordinglyl.
      onToggle: self => self.isActive && setSection(section)
    });
  });
  
  function setSection(newSection) {
    if (newSection !== current) {
      gsap.to(current, {scale: 0.8, autoAlpha: 0})
      gsap.to(newSection, {scale: 1, autoAlpha: 1});
      current = newSection;
    }
  }
  }
  








  