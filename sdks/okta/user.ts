// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
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
    public static readonly __pulumiType = 'okta:index/user:User';

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
     * User city
     */
    public readonly city!: pulumi.Output<string | undefined>;
    /**
     * User cost center
     */
    public readonly costCenter!: pulumi.Output<string | undefined>;
    /**
     * User country code
     */
    public readonly countryCode!: pulumi.Output<string | undefined>;
    /**
     * JSON formatted custom attributes for a user. It must be JSON due to various types Okta allows.
     */
    public readonly customProfileAttributes!: pulumi.Output<string>;
    public readonly customProfileAttributesToIgnores!: pulumi.Output<string[] | undefined>;
    /**
     * User department
     */
    public readonly department!: pulumi.Output<string | undefined>;
    /**
     * User display name, suitable to show end users
     */
    public readonly displayName!: pulumi.Output<string | undefined>;
    /**
     * User division
     */
    public readonly division!: pulumi.Output<string | undefined>;
    /**
     * User primary email address
     */
    public readonly email!: pulumi.Output<string>;
    /**
     * User employee number
     */
    public readonly employeeNumber!: pulumi.Output<string | undefined>;
    /**
     * If set to `true`, the user will have to change the password at the next login. This property will be used when user is
     * being created and works only when `password` field is set. Default: `false`
     */
    public readonly expirePasswordOnCreate!: pulumi.Output<boolean | undefined>;
    /**
     * User first name
     */
    public readonly firstName!: pulumi.Output<string>;
    /**
     * User honorific prefix
     */
    public readonly honorificPrefix!: pulumi.Output<string | undefined>;
    /**
     * User honorific suffix
     */
    public readonly honorificSuffix!: pulumi.Output<string | undefined>;
    /**
     * User last name
     */
    public readonly lastName!: pulumi.Output<string>;
    /**
     * User default location
     */
    public readonly locale!: pulumi.Output<string | undefined>;
    /**
     * User Okta login
     */
    public readonly login!: pulumi.Output<string>;
    /**
     * Manager of User
     */
    public readonly manager!: pulumi.Output<string | undefined>;
    /**
     * Manager ID of User
     */
    public readonly managerId!: pulumi.Output<string | undefined>;
    /**
     * User middle name
     */
    public readonly middleName!: pulumi.Output<string | undefined>;
    /**
     * User mobile phone number
     */
    public readonly mobilePhone!: pulumi.Output<string | undefined>;
    /**
     * User nickname
     */
    public readonly nickName!: pulumi.Output<string | undefined>;
    /**
     * Old User Password. Should be only set in case the password was not changed using the provider. fter successful password
     * change this field should be removed and `password` field should be used for further changes.
     */
    public readonly oldPassword!: pulumi.Output<string | undefined>;
    /**
     * User organization
     */
    public readonly organization!: pulumi.Output<string | undefined>;
    /**
     * User Password
     */
    public readonly password!: pulumi.Output<string | undefined>;
    /**
     * Specifies a hashed password to import into Okta.
     */
    public readonly passwordHash!: pulumi.Output<outputs.UserPasswordHash | undefined>;
    /**
     * Specifies that a Password Import Inline Hook should be triggered to handle verification of the user's password the first
     * time the user logs in. This allows an existing password to be imported into Okta directly from some other store. When
     * updating a user with a password hook the user must be in the `STAGED` status. The `password` field should not be
     * specified when using Password Import Inline Hook.
     */
    public readonly passwordInlineHook!: pulumi.Output<string | undefined>;
    /**
     * User mailing address
     */
    public readonly postalAddress!: pulumi.Output<string | undefined>;
    /**
     * User preferred language
     */
    public readonly preferredLanguage!: pulumi.Output<string | undefined>;
    /**
     * User primary phone number
     */
    public readonly primaryPhone!: pulumi.Output<string | undefined>;
    /**
     * User online profile (web page)
     */
    public readonly profileUrl!: pulumi.Output<string | undefined>;
    /**
     * The raw status of the User in Okta - (status is mapped)
     */
    public /*out*/ readonly rawStatus!: pulumi.Output<string>;
    /**
     * User Password Recovery Answer
     */
    public readonly recoveryAnswer!: pulumi.Output<string | undefined>;
    /**
     * User Password Recovery Question
     */
    public readonly recoveryQuestion!: pulumi.Output<string | undefined>;
    /**
     * User secondary email address, used for account recovery
     */
    public readonly secondEmail!: pulumi.Output<string | undefined>;
    /**
     * Do not populate user roles information (prevents additional API call)
     *
     * @deprecated Deprecated
     */
    public readonly skipRoles!: pulumi.Output<boolean | undefined>;
    /**
     * User state or region
     */
    public readonly state!: pulumi.Output<string | undefined>;
    /**
     * User profile property. Valid values are `ACTIVE`, `DEPROVISIONED`, `STAGED`, `SUSPENDED`. Default: `ACTIVE`
     */
    public readonly status!: pulumi.Output<string | undefined>;
    /**
     * User street address
     */
    public readonly streetAddress!: pulumi.Output<string | undefined>;
    /**
     * User default timezone
     */
    public readonly timezone!: pulumi.Output<string | undefined>;
    /**
     * User title
     */
    public readonly title!: pulumi.Output<string | undefined>;
    /**
     * User employee type
     */
    public readonly userType!: pulumi.Output<string | undefined>;
    /**
     * User zipcode or postal code
     */
    public readonly zipCode!: pulumi.Output<string | undefined>;

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
            resourceInputs["city"] = state ? state.city : undefined;
            resourceInputs["costCenter"] = state ? state.costCenter : undefined;
            resourceInputs["countryCode"] = state ? state.countryCode : undefined;
            resourceInputs["customProfileAttributes"] = state ? state.customProfileAttributes : undefined;
            resourceInputs["customProfileAttributesToIgnores"] = state ? state.customProfileAttributesToIgnores : undefined;
            resourceInputs["department"] = state ? state.department : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["division"] = state ? state.division : undefined;
            resourceInputs["email"] = state ? state.email : undefined;
            resourceInputs["employeeNumber"] = state ? state.employeeNumber : undefined;
            resourceInputs["expirePasswordOnCreate"] = state ? state.expirePasswordOnCreate : undefined;
            resourceInputs["firstName"] = state ? state.firstName : undefined;
            resourceInputs["honorificPrefix"] = state ? state.honorificPrefix : undefined;
            resourceInputs["honorificSuffix"] = state ? state.honorificSuffix : undefined;
            resourceInputs["lastName"] = state ? state.lastName : undefined;
            resourceInputs["locale"] = state ? state.locale : undefined;
            resourceInputs["login"] = state ? state.login : undefined;
            resourceInputs["manager"] = state ? state.manager : undefined;
            resourceInputs["managerId"] = state ? state.managerId : undefined;
            resourceInputs["middleName"] = state ? state.middleName : undefined;
            resourceInputs["mobilePhone"] = state ? state.mobilePhone : undefined;
            resourceInputs["nickName"] = state ? state.nickName : undefined;
            resourceInputs["oldPassword"] = state ? state.oldPassword : undefined;
            resourceInputs["organization"] = state ? state.organization : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["passwordHash"] = state ? state.passwordHash : undefined;
            resourceInputs["passwordInlineHook"] = state ? state.passwordInlineHook : undefined;
            resourceInputs["postalAddress"] = state ? state.postalAddress : undefined;
            resourceInputs["preferredLanguage"] = state ? state.preferredLanguage : undefined;
            resourceInputs["primaryPhone"] = state ? state.primaryPhone : undefined;
            resourceInputs["profileUrl"] = state ? state.profileUrl : undefined;
            resourceInputs["rawStatus"] = state ? state.rawStatus : undefined;
            resourceInputs["recoveryAnswer"] = state ? state.recoveryAnswer : undefined;
            resourceInputs["recoveryQuestion"] = state ? state.recoveryQuestion : undefined;
            resourceInputs["secondEmail"] = state ? state.secondEmail : undefined;
            resourceInputs["skipRoles"] = state ? state.skipRoles : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["streetAddress"] = state ? state.streetAddress : undefined;
            resourceInputs["timezone"] = state ? state.timezone : undefined;
            resourceInputs["title"] = state ? state.title : undefined;
            resourceInputs["userType"] = state ? state.userType : undefined;
            resourceInputs["zipCode"] = state ? state.zipCode : undefined;
        } else {
            const args = argsOrState as UserArgs | undefined;
            if ((!args || args.email === undefined) && !opts.urn) {
                throw new Error("Missing required property 'email'");
            }
            if ((!args || args.firstName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'firstName'");
            }
            if ((!args || args.lastName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'lastName'");
            }
            if ((!args || args.login === undefined) && !opts.urn) {
                throw new Error("Missing required property 'login'");
            }
            resourceInputs["city"] = args ? args.city : undefined;
            resourceInputs["costCenter"] = args ? args.costCenter : undefined;
            resourceInputs["countryCode"] = args ? args.countryCode : undefined;
            resourceInputs["customProfileAttributes"] = args ? args.customProfileAttributes : undefined;
            resourceInputs["customProfileAttributesToIgnores"] = args ? args.customProfileAttributesToIgnores : undefined;
            resourceInputs["department"] = args ? args.department : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["division"] = args ? args.division : undefined;
            resourceInputs["email"] = args ? args.email : undefined;
            resourceInputs["employeeNumber"] = args ? args.employeeNumber : undefined;
            resourceInputs["expirePasswordOnCreate"] = args ? args.expirePasswordOnCreate : undefined;
            resourceInputs["firstName"] = args ? args.firstName : undefined;
            resourceInputs["honorificPrefix"] = args ? args.honorificPrefix : undefined;
            resourceInputs["honorificSuffix"] = args ? args.honorificSuffix : undefined;
            resourceInputs["lastName"] = args ? args.lastName : undefined;
            resourceInputs["locale"] = args ? args.locale : undefined;
            resourceInputs["login"] = args ? args.login : undefined;
            resourceInputs["manager"] = args ? args.manager : undefined;
            resourceInputs["managerId"] = args ? args.managerId : undefined;
            resourceInputs["middleName"] = args ? args.middleName : undefined;
            resourceInputs["mobilePhone"] = args ? args.mobilePhone : undefined;
            resourceInputs["nickName"] = args ? args.nickName : undefined;
            resourceInputs["oldPassword"] = args?.oldPassword ? pulumi.secret(args.oldPassword) : undefined;
            resourceInputs["organization"] = args ? args.organization : undefined;
            resourceInputs["password"] = args?.password ? pulumi.secret(args.password) : undefined;
            resourceInputs["passwordHash"] = args ? args.passwordHash : undefined;
            resourceInputs["passwordInlineHook"] = args ? args.passwordInlineHook : undefined;
            resourceInputs["postalAddress"] = args ? args.postalAddress : undefined;
            resourceInputs["preferredLanguage"] = args ? args.preferredLanguage : undefined;
            resourceInputs["primaryPhone"] = args ? args.primaryPhone : undefined;
            resourceInputs["profileUrl"] = args ? args.profileUrl : undefined;
            resourceInputs["recoveryAnswer"] = args?.recoveryAnswer ? pulumi.secret(args.recoveryAnswer) : undefined;
            resourceInputs["recoveryQuestion"] = args ? args.recoveryQuestion : undefined;
            resourceInputs["secondEmail"] = args ? args.secondEmail : undefined;
            resourceInputs["skipRoles"] = args ? args.skipRoles : undefined;
            resourceInputs["state"] = args ? args.state : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["streetAddress"] = args ? args.streetAddress : undefined;
            resourceInputs["timezone"] = args ? args.timezone : undefined;
            resourceInputs["title"] = args ? args.title : undefined;
            resourceInputs["userType"] = args ? args.userType : undefined;
            resourceInputs["zipCode"] = args ? args.zipCode : undefined;
            resourceInputs["rawStatus"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["oldPassword", "password", "recoveryAnswer"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(User.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering User resources.
 */
export interface UserState {
    /**
     * User city
     */
    city?: pulumi.Input<string>;
    /**
     * User cost center
     */
    costCenter?: pulumi.Input<string>;
    /**
     * User country code
     */
    countryCode?: pulumi.Input<string>;
    /**
     * JSON formatted custom attributes for a user. It must be JSON due to various types Okta allows.
     */
    customProfileAttributes?: pulumi.Input<string>;
    customProfileAttributesToIgnores?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * User department
     */
    department?: pulumi.Input<string>;
    /**
     * User display name, suitable to show end users
     */
    displayName?: pulumi.Input<string>;
    /**
     * User division
     */
    division?: pulumi.Input<string>;
    /**
     * User primary email address
     */
    email?: pulumi.Input<string>;
    /**
     * User employee number
     */
    employeeNumber?: pulumi.Input<string>;
    /**
     * If set to `true`, the user will have to change the password at the next login. This property will be used when user is
     * being created and works only when `password` field is set. Default: `false`
     */
    expirePasswordOnCreate?: pulumi.Input<boolean>;
    /**
     * User first name
     */
    firstName?: pulumi.Input<string>;
    /**
     * User honorific prefix
     */
    honorificPrefix?: pulumi.Input<string>;
    /**
     * User honorific suffix
     */
    honorificSuffix?: pulumi.Input<string>;
    /**
     * User last name
     */
    lastName?: pulumi.Input<string>;
    /**
     * User default location
     */
    locale?: pulumi.Input<string>;
    /**
     * User Okta login
     */
    login?: pulumi.Input<string>;
    /**
     * Manager of User
     */
    manager?: pulumi.Input<string>;
    /**
     * Manager ID of User
     */
    managerId?: pulumi.Input<string>;
    /**
     * User middle name
     */
    middleName?: pulumi.Input<string>;
    /**
     * User mobile phone number
     */
    mobilePhone?: pulumi.Input<string>;
    /**
     * User nickname
     */
    nickName?: pulumi.Input<string>;
    /**
     * Old User Password. Should be only set in case the password was not changed using the provider. fter successful password
     * change this field should be removed and `password` field should be used for further changes.
     */
    oldPassword?: pulumi.Input<string>;
    /**
     * User organization
     */
    organization?: pulumi.Input<string>;
    /**
     * User Password
     */
    password?: pulumi.Input<string>;
    /**
     * Specifies a hashed password to import into Okta.
     */
    passwordHash?: pulumi.Input<inputs.UserPasswordHash>;
    /**
     * Specifies that a Password Import Inline Hook should be triggered to handle verification of the user's password the first
     * time the user logs in. This allows an existing password to be imported into Okta directly from some other store. When
     * updating a user with a password hook the user must be in the `STAGED` status. The `password` field should not be
     * specified when using Password Import Inline Hook.
     */
    passwordInlineHook?: pulumi.Input<string>;
    /**
     * User mailing address
     */
    postalAddress?: pulumi.Input<string>;
    /**
     * User preferred language
     */
    preferredLanguage?: pulumi.Input<string>;
    /**
     * User primary phone number
     */
    primaryPhone?: pulumi.Input<string>;
    /**
     * User online profile (web page)
     */
    profileUrl?: pulumi.Input<string>;
    /**
     * The raw status of the User in Okta - (status is mapped)
     */
    rawStatus?: pulumi.Input<string>;
    /**
     * User Password Recovery Answer
     */
    recoveryAnswer?: pulumi.Input<string>;
    /**
     * User Password Recovery Question
     */
    recoveryQuestion?: pulumi.Input<string>;
    /**
     * User secondary email address, used for account recovery
     */
    secondEmail?: pulumi.Input<string>;
    /**
     * Do not populate user roles information (prevents additional API call)
     *
     * @deprecated Deprecated
     */
    skipRoles?: pulumi.Input<boolean>;
    /**
     * User state or region
     */
    state?: pulumi.Input<string>;
    /**
     * User profile property. Valid values are `ACTIVE`, `DEPROVISIONED`, `STAGED`, `SUSPENDED`. Default: `ACTIVE`
     */
    status?: pulumi.Input<string>;
    /**
     * User street address
     */
    streetAddress?: pulumi.Input<string>;
    /**
     * User default timezone
     */
    timezone?: pulumi.Input<string>;
    /**
     * User title
     */
    title?: pulumi.Input<string>;
    /**
     * User employee type
     */
    userType?: pulumi.Input<string>;
    /**
     * User zipcode or postal code
     */
    zipCode?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a User resource.
 */
export interface UserArgs {
    /**
     * User city
     */
    city?: pulumi.Input<string>;
    /**
     * User cost center
     */
    costCenter?: pulumi.Input<string>;
    /**
     * User country code
     */
    countryCode?: pulumi.Input<string>;
    /**
     * JSON formatted custom attributes for a user. It must be JSON due to various types Okta allows.
     */
    customProfileAttributes?: pulumi.Input<string>;
    customProfileAttributesToIgnores?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * User department
     */
    department?: pulumi.Input<string>;
    /**
     * User display name, suitable to show end users
     */
    displayName?: pulumi.Input<string>;
    /**
     * User division
     */
    division?: pulumi.Input<string>;
    /**
     * User primary email address
     */
    email: pulumi.Input<string>;
    /**
     * User employee number
     */
    employeeNumber?: pulumi.Input<string>;
    /**
     * If set to `true`, the user will have to change the password at the next login. This property will be used when user is
     * being created and works only when `password` field is set. Default: `false`
     */
    expirePasswordOnCreate?: pulumi.Input<boolean>;
    /**
     * User first name
     */
    firstName: pulumi.Input<string>;
    /**
     * User honorific prefix
     */
    honorificPrefix?: pulumi.Input<string>;
    /**
     * User honorific suffix
     */
    honorificSuffix?: pulumi.Input<string>;
    /**
     * User last name
     */
    lastName: pulumi.Input<string>;
    /**
     * User default location
     */
    locale?: pulumi.Input<string>;
    /**
     * User Okta login
     */
    login: pulumi.Input<string>;
    /**
     * Manager of User
     */
    manager?: pulumi.Input<string>;
    /**
     * Manager ID of User
     */
    managerId?: pulumi.Input<string>;
    /**
     * User middle name
     */
    middleName?: pulumi.Input<string>;
    /**
     * User mobile phone number
     */
    mobilePhone?: pulumi.Input<string>;
    /**
     * User nickname
     */
    nickName?: pulumi.Input<string>;
    /**
     * Old User Password. Should be only set in case the password was not changed using the provider. fter successful password
     * change this field should be removed and `password` field should be used for further changes.
     */
    oldPassword?: pulumi.Input<string>;
    /**
     * User organization
     */
    organization?: pulumi.Input<string>;
    /**
     * User Password
     */
    password?: pulumi.Input<string>;
    /**
     * Specifies a hashed password to import into Okta.
     */
    passwordHash?: pulumi.Input<inputs.UserPasswordHash>;
    /**
     * Specifies that a Password Import Inline Hook should be triggered to handle verification of the user's password the first
     * time the user logs in. This allows an existing password to be imported into Okta directly from some other store. When
     * updating a user with a password hook the user must be in the `STAGED` status. The `password` field should not be
     * specified when using Password Import Inline Hook.
     */
    passwordInlineHook?: pulumi.Input<string>;
    /**
     * User mailing address
     */
    postalAddress?: pulumi.Input<string>;
    /**
     * User preferred language
     */
    preferredLanguage?: pulumi.Input<string>;
    /**
     * User primary phone number
     */
    primaryPhone?: pulumi.Input<string>;
    /**
     * User online profile (web page)
     */
    profileUrl?: pulumi.Input<string>;
    /**
     * User Password Recovery Answer
     */
    recoveryAnswer?: pulumi.Input<string>;
    /**
     * User Password Recovery Question
     */
    recoveryQuestion?: pulumi.Input<string>;
    /**
     * User secondary email address, used for account recovery
     */
    secondEmail?: pulumi.Input<string>;
    /**
     * Do not populate user roles information (prevents additional API call)
     *
     * @deprecated Deprecated
     */
    skipRoles?: pulumi.Input<boolean>;
    /**
     * User state or region
     */
    state?: pulumi.Input<string>;
    /**
     * User profile property. Valid values are `ACTIVE`, `DEPROVISIONED`, `STAGED`, `SUSPENDED`. Default: `ACTIVE`
     */
    status?: pulumi.Input<string>;
    /**
     * User street address
     */
    streetAddress?: pulumi.Input<string>;
    /**
     * User default timezone
     */
    timezone?: pulumi.Input<string>;
    /**
     * User title
     */
    title?: pulumi.Input<string>;
    /**
     * User employee type
     */
    userType?: pulumi.Input<string>;
    /**
     * User zipcode or postal code
     */
    zipCode?: pulumi.Input<string>;
}
