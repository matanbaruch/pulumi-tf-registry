// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class User extends pulumi.CustomResource {
    /**
     * Get an existing User resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: UserState, opts?: pulumi.CustomResourceOptions): User {
        return new User(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'freeipa:index/user:User';

    /**
     * Returns true if the given object is an instance of User.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is User {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === User.__pulumiType;
    }

    /**
     * Account disabled
     */
    public readonly accountDisabled!: pulumi.Output<boolean | undefined>;
    /**
     * Car License
     */
    public readonly carLicenses!: pulumi.Output<string[] | undefined>;
    /**
     * City
     */
    public readonly city!: pulumi.Output<string | undefined>;
    /**
     * Display name
     */
    public readonly displayName!: pulumi.Output<string | undefined>;
    /**
     * Email address
     */
    public readonly emailAddresses!: pulumi.Output<string[] | undefined>;
    /**
     * Employee Number
     */
    public readonly employeeNumber!: pulumi.Output<string | undefined>;
    /**
     * Employee Type
     */
    public readonly employeeType!: pulumi.Output<string | undefined>;
    /**
     * First name
     */
    public readonly firstName!: pulumi.Output<string>;
    /**
     * Full name
     */
    public readonly fullName!: pulumi.Output<string | undefined>;
    /**
     * GECOS
     */
    public readonly gecos!: pulumi.Output<string | undefined>;
    /**
     * Group ID Number
     */
    public readonly gidNumber!: pulumi.Output<number | undefined>;
    /**
     * Home directory
     */
    public readonly homeDirectory!: pulumi.Output<string | undefined>;
    /**
     * Initials
     */
    public readonly initials!: pulumi.Output<string | undefined>;
    /**
     * Job Title
     */
    public readonly jobTitle!: pulumi.Output<string | undefined>;
    /**
     * User password expiration [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.8) format (see [RFC3339 time
     * string](https://tools.ietf.org/html/rfc3339#section-5.8) e.g., `YYYY-MM-DDTHH:MM:SSZ`)
     */
    public readonly krbPasswordExpiration!: pulumi.Output<string | undefined>;
    /**
     * Kerberos principal expiration [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.8) format (see [RFC3339
     * time string](https://tools.ietf.org/html/rfc3339#section-5.8) e.g., `YYYY-MM-DDTHH:MM:SSZ`)
     */
    public readonly krbPrincipalExpiration!: pulumi.Output<string | undefined>;
    /**
     * Principal alias
     */
    public readonly krbPrincipalNames!: pulumi.Output<string[] | undefined>;
    /**
     * Last name
     */
    public readonly lastName!: pulumi.Output<string>;
    /**
     * Login shell
     */
    public readonly loginShell!: pulumi.Output<string | undefined>;
    /**
     * Manager
     */
    public readonly manager!: pulumi.Output<string | undefined>;
    /**
     * Mobile Telephone Number
     */
    public readonly mobileNumbers!: pulumi.Output<string[] | undefined>;
    /**
     * UID
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Org. Unit
     */
    public readonly organisationUnit!: pulumi.Output<string | undefined>;
    /**
     * ZIP code
     */
    public readonly postalCode!: pulumi.Output<string | undefined>;
    /**
     * Preferred Language
     */
    public readonly preferredLanguage!: pulumi.Output<string | undefined>;
    /**
     * State/Province
     */
    public readonly province!: pulumi.Output<string | undefined>;
    /**
     * Generate a random user password
     */
    public readonly randomPassword!: pulumi.Output<boolean | undefined>;
    /**
     * SSH public key
     */
    public readonly sshPublicKeys!: pulumi.Output<string[] | undefined>;
    /**
     * Street address
     */
    public readonly streetAddress!: pulumi.Output<string | undefined>;
    /**
     * Telephone Number
     */
    public readonly telephoneNumbers!: pulumi.Output<string[] | undefined>;
    /**
     * User ID Number (system will assign one if not provided)
     */
    public readonly uidNumber!: pulumi.Output<number | undefined>;
    /**
     * User category (semantics placed on this attribute are for local interpretation)
     */
    public readonly userclasses!: pulumi.Output<string[] | undefined>;
    /**
     * Prompt to set the user password
     */
    public readonly userpassword!: pulumi.Output<string | undefined>;

    /**
     * Create a User resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: UserArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: UserArgs | UserState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as UserState | undefined;
            resourceInputs["accountDisabled"] = state ? state.accountDisabled : undefined;
            resourceInputs["carLicenses"] = state ? state.carLicenses : undefined;
            resourceInputs["city"] = state ? state.city : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["emailAddresses"] = state ? state.emailAddresses : undefined;
            resourceInputs["employeeNumber"] = state ? state.employeeNumber : undefined;
            resourceInputs["employeeType"] = state ? state.employeeType : undefined;
            resourceInputs["firstName"] = state ? state.firstName : undefined;
            resourceInputs["fullName"] = state ? state.fullName : undefined;
            resourceInputs["gecos"] = state ? state.gecos : undefined;
            resourceInputs["gidNumber"] = state ? state.gidNumber : undefined;
            resourceInputs["homeDirectory"] = state ? state.homeDirectory : undefined;
            resourceInputs["initials"] = state ? state.initials : undefined;
            resourceInputs["jobTitle"] = state ? state.jobTitle : undefined;
            resourceInputs["krbPasswordExpiration"] = state ? state.krbPasswordExpiration : undefined;
            resourceInputs["krbPrincipalExpiration"] = state ? state.krbPrincipalExpiration : undefined;
            resourceInputs["krbPrincipalNames"] = state ? state.krbPrincipalNames : undefined;
            resourceInputs["lastName"] = state ? state.lastName : undefined;
            resourceInputs["loginShell"] = state ? state.loginShell : undefined;
            resourceInputs["manager"] = state ? state.manager : undefined;
            resourceInputs["mobileNumbers"] = state ? state.mobileNumbers : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["organisationUnit"] = state ? state.organisationUnit : undefined;
            resourceInputs["postalCode"] = state ? state.postalCode : undefined;
            resourceInputs["preferredLanguage"] = state ? state.preferredLanguage : undefined;
            resourceInputs["province"] = state ? state.province : undefined;
            resourceInputs["randomPassword"] = state ? state.randomPassword : undefined;
            resourceInputs["sshPublicKeys"] = state ? state.sshPublicKeys : undefined;
            resourceInputs["streetAddress"] = state ? state.streetAddress : undefined;
            resourceInputs["telephoneNumbers"] = state ? state.telephoneNumbers : undefined;
            resourceInputs["uidNumber"] = state ? state.uidNumber : undefined;
            resourceInputs["userclasses"] = state ? state.userclasses : undefined;
            resourceInputs["userpassword"] = state ? state.userpassword : undefined;
        } else {
            const args = argsOrState as UserArgs | undefined;
            if ((!args || args.firstName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'firstName'");
            }
            if ((!args || args.lastName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'lastName'");
            }
            resourceInputs["accountDisabled"] = args ? args.accountDisabled : undefined;
            resourceInputs["carLicenses"] = args ? args.carLicenses : undefined;
            resourceInputs["city"] = args ? args.city : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["emailAddresses"] = args ? args.emailAddresses : undefined;
            resourceInputs["employeeNumber"] = args ? args.employeeNumber : undefined;
            resourceInputs["employeeType"] = args ? args.employeeType : undefined;
            resourceInputs["firstName"] = args ? args.firstName : undefined;
            resourceInputs["fullName"] = args ? args.fullName : undefined;
            resourceInputs["gecos"] = args ? args.gecos : undefined;
            resourceInputs["gidNumber"] = args ? args.gidNumber : undefined;
            resourceInputs["homeDirectory"] = args ? args.homeDirectory : undefined;
            resourceInputs["initials"] = args ? args.initials : undefined;
            resourceInputs["jobTitle"] = args ? args.jobTitle : undefined;
            resourceInputs["krbPasswordExpiration"] = args ? args.krbPasswordExpiration : undefined;
            resourceInputs["krbPrincipalExpiration"] = args ? args.krbPrincipalExpiration : undefined;
            resourceInputs["krbPrincipalNames"] = args ? args.krbPrincipalNames : undefined;
            resourceInputs["lastName"] = args ? args.lastName : undefined;
            resourceInputs["loginShell"] = args ? args.loginShell : undefined;
            resourceInputs["manager"] = args ? args.manager : undefined;
            resourceInputs["mobileNumbers"] = args ? args.mobileNumbers : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["organisationUnit"] = args ? args.organisationUnit : undefined;
            resourceInputs["postalCode"] = args ? args.postalCode : undefined;
            resourceInputs["preferredLanguage"] = args ? args.preferredLanguage : undefined;
            resourceInputs["province"] = args ? args.province : undefined;
            resourceInputs["randomPassword"] = args ? args.randomPassword : undefined;
            resourceInputs["sshPublicKeys"] = args ? args.sshPublicKeys : undefined;
            resourceInputs["streetAddress"] = args ? args.streetAddress : undefined;
            resourceInputs["telephoneNumbers"] = args ? args.telephoneNumbers : undefined;
            resourceInputs["uidNumber"] = args ? args.uidNumber : undefined;
            resourceInputs["userclasses"] = args ? args.userclasses : undefined;
            resourceInputs["userpassword"] = args?.userpassword ? pulumi.secret(args.userpassword) : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["userpassword"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(User.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering User resources.
 */
export interface UserState {
    /**
     * Account disabled
     */
    accountDisabled?: pulumi.Input<boolean>;
    /**
     * Car License
     */
    carLicenses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * City
     */
    city?: pulumi.Input<string>;
    /**
     * Display name
     */
    displayName?: pulumi.Input<string>;
    /**
     * Email address
     */
    emailAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Employee Number
     */
    employeeNumber?: pulumi.Input<string>;
    /**
     * Employee Type
     */
    employeeType?: pulumi.Input<string>;
    /**
     * First name
     */
    firstName?: pulumi.Input<string>;
    /**
     * Full name
     */
    fullName?: pulumi.Input<string>;
    /**
     * GECOS
     */
    gecos?: pulumi.Input<string>;
    /**
     * Group ID Number
     */
    gidNumber?: pulumi.Input<number>;
    /**
     * Home directory
     */
    homeDirectory?: pulumi.Input<string>;
    /**
     * Initials
     */
    initials?: pulumi.Input<string>;
    /**
     * Job Title
     */
    jobTitle?: pulumi.Input<string>;
    /**
     * User password expiration [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.8) format (see [RFC3339 time
     * string](https://tools.ietf.org/html/rfc3339#section-5.8) e.g., `YYYY-MM-DDTHH:MM:SSZ`)
     */
    krbPasswordExpiration?: pulumi.Input<string>;
    /**
     * Kerberos principal expiration [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.8) format (see [RFC3339
     * time string](https://tools.ietf.org/html/rfc3339#section-5.8) e.g., `YYYY-MM-DDTHH:MM:SSZ`)
     */
    krbPrincipalExpiration?: pulumi.Input<string>;
    /**
     * Principal alias
     */
    krbPrincipalNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Last name
     */
    lastName?: pulumi.Input<string>;
    /**
     * Login shell
     */
    loginShell?: pulumi.Input<string>;
    /**
     * Manager
     */
    manager?: pulumi.Input<string>;
    /**
     * Mobile Telephone Number
     */
    mobileNumbers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * UID
     */
    name?: pulumi.Input<string>;
    /**
     * Org. Unit
     */
    organisationUnit?: pulumi.Input<string>;
    /**
     * ZIP code
     */
    postalCode?: pulumi.Input<string>;
    /**
     * Preferred Language
     */
    preferredLanguage?: pulumi.Input<string>;
    /**
     * State/Province
     */
    province?: pulumi.Input<string>;
    /**
     * Generate a random user password
     */
    randomPassword?: pulumi.Input<boolean>;
    /**
     * SSH public key
     */
    sshPublicKeys?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Street address
     */
    streetAddress?: pulumi.Input<string>;
    /**
     * Telephone Number
     */
    telephoneNumbers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * User ID Number (system will assign one if not provided)
     */
    uidNumber?: pulumi.Input<number>;
    /**
     * User category (semantics placed on this attribute are for local interpretation)
     */
    userclasses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Prompt to set the user password
     */
    userpassword?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a User resource.
 */
export interface UserArgs {
    /**
     * Account disabled
     */
    accountDisabled?: pulumi.Input<boolean>;
    /**
     * Car License
     */
    carLicenses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * City
     */
    city?: pulumi.Input<string>;
    /**
     * Display name
     */
    displayName?: pulumi.Input<string>;
    /**
     * Email address
     */
    emailAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Employee Number
     */
    employeeNumber?: pulumi.Input<string>;
    /**
     * Employee Type
     */
    employeeType?: pulumi.Input<string>;
    /**
     * First name
     */
    firstName: pulumi.Input<string>;
    /**
     * Full name
     */
    fullName?: pulumi.Input<string>;
    /**
     * GECOS
     */
    gecos?: pulumi.Input<string>;
    /**
     * Group ID Number
     */
    gidNumber?: pulumi.Input<number>;
    /**
     * Home directory
     */
    homeDirectory?: pulumi.Input<string>;
    /**
     * Initials
     */
    initials?: pulumi.Input<string>;
    /**
     * Job Title
     */
    jobTitle?: pulumi.Input<string>;
    /**
     * User password expiration [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.8) format (see [RFC3339 time
     * string](https://tools.ietf.org/html/rfc3339#section-5.8) e.g., `YYYY-MM-DDTHH:MM:SSZ`)
     */
    krbPasswordExpiration?: pulumi.Input<string>;
    /**
     * Kerberos principal expiration [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.8) format (see [RFC3339
     * time string](https://tools.ietf.org/html/rfc3339#section-5.8) e.g., `YYYY-MM-DDTHH:MM:SSZ`)
     */
    krbPrincipalExpiration?: pulumi.Input<string>;
    /**
     * Principal alias
     */
    krbPrincipalNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Last name
     */
    lastName: pulumi.Input<string>;
    /**
     * Login shell
     */
    loginShell?: pulumi.Input<string>;
    /**
     * Manager
     */
    manager?: pulumi.Input<string>;
    /**
     * Mobile Telephone Number
     */
    mobileNumbers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * UID
     */
    name?: pulumi.Input<string>;
    /**
     * Org. Unit
     */
    organisationUnit?: pulumi.Input<string>;
    /**
     * ZIP code
     */
    postalCode?: pulumi.Input<string>;
    /**
     * Preferred Language
     */
    preferredLanguage?: pulumi.Input<string>;
    /**
     * State/Province
     */
    province?: pulumi.Input<string>;
    /**
     * Generate a random user password
     */
    randomPassword?: pulumi.Input<boolean>;
    /**
     * SSH public key
     */
    sshPublicKeys?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Street address
     */
    streetAddress?: pulumi.Input<string>;
    /**
     * Telephone Number
     */
    telephoneNumbers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * User ID Number (system will assign one if not provided)
     */
    uidNumber?: pulumi.Input<number>;
    /**
     * User category (semantics placed on this attribute are for local interpretation)
     */
    userclasses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Prompt to set the user password
     */
    userpassword?: pulumi.Input<string>;
}
