module.exports = {
    require: ['@babel/register'],
    timeout: '10000',
    exclude: ['test/exaple.spec.js'],
    file: 'setup/project-setup.js',
    reporter: "mochawesome",
    reporterOptions: [
          
          'json=false',
          'quiet=true',
          'reportFileName=updatedReport',
          'reportDir=MyReports'
          //'reportFilename=[status]_[datetime]updatedReport'
    ]
        
 }


 