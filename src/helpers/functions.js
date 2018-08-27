var jQuery = require('jquery')

module.exports =  {
  goToByScroll(id) {
    jQuery("html,body").animate(
      { scrollTop: jQuery(id).offset().top },
      "slow"
    )
  }
}
