const PAGING_LIST = [
    {
        pageName: 'USERS',
        pageType:'userlist',
        imageSrc: Menuicon,
        handleClick: (e) => {
            this.getCustomerListing(e, "user", 1);
        }
    },
    {
        pageName: ' PROFESSIONALS',
        pageType:'proffList',
        imageSrc: Menuicon,
        handleClick: (e) => {
            this.getProffListing(1, 10, "", "", "", "'Pray','Luv','Eat'");
        }
    },
    {
        pageName: ' LISTENERS',
        pageType: 'listner', 
        imageSrc: Menuiconblue,
        handleClick: (e) => {
            this.getListnerListing(e, "listner", 1);
        }
    },
    {
        pageName: 'DOMAIN LIST',
        pageType:'domainList',
        imageSrc: Menuicon,
        handleClick: (e) => {
            this.getDomainListing(1, 10);
        }
    },
    {
        pageName: 'ADD CORPORATE MEMBER',
        pageType:'addMember',
        imageSrc: Menuicon,
        handleClick: (e) => {
            this.setState({ pageType: "addMember" });
        }
    },
    {
        pageName: 'REPORT REQUESTS',
        pageType:"blockList",
        imageSrc: Menuicon,
        handleClick: (e) => {
            this.getBlockuserListing(1, 10, 0);
        }
    },
    {
        pageName: ' REVIEW REQUESTS',
        pageType: 'reviewList',
        imageSrc: Menuicon,
        handleClick: (e) => {
            this.getReviewListing(1, 10, 0);
        }
    },
    {
        pageName: ' SESSION REQUESTS',
        pageType : 'sessionList',
        imageSrc: Menuicon,
        handleClick: (e) => {
            this.getReviewListing(1, 10, 0);
        }
    },
    {
        pageName: ' PAYMENT LIST',
        pageType: 'paymentList',
        imageSrc: Menuicon,
        handleClick: (e) => {
            this.getPaymentListHandler(1, 10);
        }
    },
    {
        pageName: 'PRESS BLOGS',
        pageType: 'pressblogList',
        imageSrc: Menuicon,
        handleClick: (e) => {
            this.getpressblogListHandler(1, 10);
        }
    },
    {
        pageName: 'BLOGS',
        pageType: 'blogList',
        imageSrc: Menuicon,
        handleClick: (e) => {
            this.getblogListHandler(1, 10);
        }
    },
    {
        pageName: ' SUBSCRIPTION PLAN',
        pageType: 'planList',
        imageSrc: Menuicon,
        handleClick: (e) => {
            this.superadminget_planlist(1, 10, 1);
        }
    },
    {
        pageName: 'ELNP KITS',
        pageType: 'kitList',
        imageSrc: Menuicon,
        handleClick: (e) => {
            this.superadminkits_list(1, 10);
        }
    },
    {
        pageName: 'ELNP VLOGS',
        pageType: 'vlogsList',
        imageSrc: Menuicon,
        handleClick: (e) => {
            this.superadminvlogs_list(1, 10, 1);
        }
    },
    {
        pageName: 'ASSESSMENT TEST',
        pageType:'qaList',
        imageSrc: Menuicon,
        handleClick: (e) => {
            this.superadminget_assessmenttestlist(1, 10, 2);
        }
    },
    {
        pageName: ' RATING REQUESTS',
        pageType:'ratingList',
        imageSrc: Menuicon,
        handleClick: (e) => {
            this.getRatinguserListing(1, 10, 0);
        }
    },
    {
        pageName: ' UPLOAD ELNP DOCUMENT',
        imageSrc: Menuicon,
        midDiv:true,
        handleClick: (e) => {
            this.changepath("/subscriptionDocument", "")
        }
    },
    {
        pageName: ' UPLOAD CORPORATE DOCUMENT',
        imageSrc: Menuicon,
        midDiv:true,
        handleClick: (e) => {
            this.changepath("/corporateDocument", "");
        }
    },
    {
        pageName: ' MEMBERS ASSESSMENT TEST',
        imageSrc: Menuicon,
        midDiv:true,
        handleClick: (e) => {
            this.changepath("/assessmentTestList","superadminget_assessmenttestlist")
        }
    }
]