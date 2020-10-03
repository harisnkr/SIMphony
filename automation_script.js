const puppeteer = require('puppeteer');

(async () => {

    console.time('SIMConnect navigation');
    const browser = await puppeteer.launch({
        headless: false,

    });
    // const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({
        width: 800,
        height: 600,
    });
    await page.goto(
        'https://simconnect.simge.edu.sg/psp/paprd/EMPLOYEE/HRMS/s/WEBLIB_EOPPB.ISCRIPT1.FieldFormula.Iscript_SM_Redirect?cmd=login&languageCd=ENG&',
        { waitUntil: 'networkidle2' });

    // at login page
    await page.select('#User_Type', 'Student');
    await page.$eval('#userid', el => el.value = 'harisank001@mymail.sim.edu.sg');
    await page.$eval('#pwd', el => el.value = '9_U**$?$');
    await page.click('#loginbutton');
    console.log('login successful!');
    // login done

    await page.goto('https://simconnect.simge.edu.sg/psp/paprd/EMPLOYEE/EMPL/h/?tab=SM_STUDENT', { waitUntil: 'networkidle2' });
    console.log('navigated to My Apps!');
    await page.goto('https://simconnect.simge.edu.sg/psp/paprd/EMPLOYEE/EMPL/s/WEBLIB_PTPP_SC.HOMEPAGE.FieldFormula.IScript_AppHP?pt_fname=CO_EMPLOYEE_SELF_SERVICE&FolderPath=PORTAL_ROOT_OBJECT.CO_EMPLOYEE_SELF_SERVICE&IsFolder=true');
    console.log('navigated to Self Service!');
    await page.goto("https://simconnect.simge.edu.sg/psp/paprd/EMPLOYEE/HRMS/c/SA_LEARNER_SERVICES.SSS_STUDENT_CENTER.GBL?&amp;cmd=uninav&amp;Rnode=HRMS&amp;uninavpath=Root%7bPORTAL_ROOT_OBJECT%7d.Self%20Service%7bCO_EMPLOYEE_SELF_SERVICE%7d&amp;PORTALPARAM_PTCNAV=HC_SSS_STUDENT_CENTER&amp;EOPP.SCNode=EMPL&amp;EOPP.SCPortal=EMPLOYEE&amp;EOPP.SCName=CO_EMPLOYEE_SELF_SERVICE&amp;EOPP.SCLabel=Self%20Service&amp;EOPP.SCPTfname=CO_EMPLOYEE_SELF_SERVICE&amp;FolderPath=PORTAL_ROOT_OBJECT.CO_EMPLOYEE_SELF_SERVICE.HC_SSS_STUDENT_CENTER&amp;IsFolder=false");
    console.log('navigated to Student Center!');
    // navigated through my apps, and then self service

    // at student center now
    await page.waitForSelector('iframe');
    const elementHandle = await page.$('iframe[src="https://simconnect1.simge.edu.sg:444/psc/csprd/EMPLOYEE/HRMS/c/SA_LEARNER_SERVICES.SSS_STUDENT_CENTER.GBL?&amp%3bcmd=uninav&amp%3bRnode=HRMS&amp%3buninavpath=Root%7bPORTAL_ROOT_OBJECT%7d.Self%20Service%7bCO_EMPLOYEE_SELF_SERVICE%7d&amp%3bPORTALPARAM_PTCNAV=HC_SSS_STUDENT_CENTER&amp%3bEOPP.SCNode=EMPL&amp%3bEOPP.SCPortal=EMPLOYEE&amp%3bEOPP.SCName=CO_EMPLOYEE_SELF_SERVICE&amp%3bEOPP.SCLabel=Self%20Service&amp%3bEOPP.SCPTfname=CO_EMPLOYEE_SELF_SERVICE&amp%3bFolderPath=PORTAL_ROOT_OBJECT.CO_EMPLOYEE_SELF_SERVICE.HC_SSS_STUDENT_CENTER&amp%3bIsFolder=false&PortalActualURL=https%3a%2f%2fsimconnect1.simge.edu.sg%3a444%2fpsc%2fcsprd%2fEMPLOYEE%2fHRMS%2fc%2fSA_LEARNER_SERVICES.SSS_STUDENT_CENTER.GBL%3f%26amp%253bcmd%3duninav%26amp%253bRnode%3dHRMS%26amp%253buninavpath%3dRoot%257bPORTAL_ROOT_OBJECT%257d.Self%2520Service%257bCO_EMPLOYEE_SELF_SERVICE%257d%26amp%253bPORTALPARAM_PTCNAV%3dHC_SSS_STUDENT_CENTER%26amp%253bEOPP.SCNode%3dEMPL%26amp%253bEOPP.SCPortal%3dEMPLOYEE%26amp%253bEOPP.SCName%3dCO_EMPLOYEE_SELF_SERVICE%26amp%253bEOPP.SCLabel%3dSelf%2520Service%26amp%253bEOPP.SCPTfname%3dCO_EMPLOYEE_SELF_SERVICE%26amp%253bFolderPath%3dPORTAL_ROOT_OBJECT.CO_EMPLOYEE_SELF_SERVICE.HC_SSS_STUDENT_CENTER%26amp%253bIsFolder%3dfalse&PortalContentURL=https%3a%2f%2fsimconnect1.simge.edu.sg%3a444%2fpsc%2fcsprd%2fEMPLOYEE%2fHRMS%2fc%2fSA_LEARNER_SERVICES.SSS_STUDENT_CENTER.GBL&PortalContentProvider=HRMS&PortalCRefLabel=Student%20Center&PortalRegistryName=EMPLOYEE&PortalServletURI=https%3a%2f%2fsimconnect.simge.edu.sg%2fpsp%2fpaprd%2f&PortalURI=https%3a%2f%2fsimconnect.simge.edu.sg%2fpsc%2fpaprd%2f&PortalHostNode=EMPL&NoCrumbs=yes&PortalKeyStruct=yes"]',
    );
    const frame = await elementHandle.contentFrame();
    const dropdown = await frame.$('#DERIVED_SSS_SCL_SSS_MORE_ACADEMICS');
    dropdown.select('#DERIVED_SSS_SCL_SSS_GO_1', '1002');
    const gobutton = await frame.$('#DERIVED_SSS_SCL_SSS_GO_1');
    gobutton.click('#DERIVED_SSS_SCL_SSS_GO_1');
    console.log('navigated to Personalised Timetable!');
    // navigated out of personalised timetable, and then all chosen modules are now shown

    console.timeEnd('SIMConnect navigation');
    // await browser.close();
}
)();



