// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class AccountPrimaryContact extends pulumi.CustomResource {
    /**
     * Get an existing AccountPrimaryContact resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AccountPrimaryContactState, opts?: pulumi.CustomResourceOptions): AccountPrimaryContact {
        return new AccountPrimaryContact(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/accountPrimaryContact:AccountPrimaryContact';

    /**
     * Returns true if the given object is an instance of AccountPrimaryContact.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AccountPrimaryContact {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AccountPrimaryContact.__pulumiType;
    }

    public readonly accountId!: pulumi.Output<string | undefined>;
    public readonly addressLine1!: pulumi.Output<string>;
    public readonly addressLine2!: pulumi.Output<string | undefined>;
    public readonly addressLine3!: pulumi.Output<string | undefined>;
    public readonly city!: pulumi.Output<string>;
    public readonly companyName!: pulumi.Output<string | undefined>;
    public readonly countryCode!: pulumi.Output<string>;
    public readonly districtOrCounty!: pulumi.Output<string | undefined>;
    public readonly fullName!: pulumi.Output<string>;
    public readonly phoneNumber!: pulumi.Output<string>;
    public readonly postalCode!: pulumi.Output<string>;
    public readonly stateOrRegion!: pulumi.Output<string | undefined>;
    public readonly websiteUrl!: pulumi.Output<string | undefined>;

    /**
     * Create a AccountPrimaryContact resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AccountPrimaryContactArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AccountPrimaryContactArgs | AccountPrimaryContactState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AccountPrimaryContactState | undefined;
            resourceInputs["accountId"] = state ? state.accountId : undefined;
            resourceInputs["addressLine1"] = state ? state.addressLine1 : undefined;
            resourceInputs["addressLine2"] = state ? state.addressLine2 : undefined;
            resourceInputs["addressLine3"] = state ? state.addressLine3 : undefined;
            resourceInputs["city"] = state ? state.city : undefined;
            resourceInputs["companyName"] = state ? state.companyName : undefined;
            resourceInputs["countryCode"] = state ? state.countryCode : undefined;
            resourceInputs["districtOrCounty"] = state ? state.districtOrCounty : undefined;
            resourceInputs["fullName"] = state ? state.fullName : undefined;
            resourceInputs["phoneNumber"] = state ? state.phoneNumber : undefined;
            resourceInputs["postalCode"] = state ? state.postalCode : undefined;
            resourceInputs["stateOrRegion"] = state ? state.stateOrRegion : undefined;
            resourceInputs["websiteUrl"] = state ? state.websiteUrl : undefined;
        } else {
            const args = argsOrState as AccountPrimaryContactArgs | undefined;
            if ((!args || args.addressLine1 === undefined) && !opts.urn) {
                throw new Error("Missing required property 'addressLine1'");
            }
            if ((!args || args.city === undefined) && !opts.urn) {
                throw new Error("Missing required property 'city'");
            }
            if ((!args || args.countryCode === undefined) && !opts.urn) {
                throw new Error("Missing required property 'countryCode'");
            }
            if ((!args || args.fullName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'fullName'");
            }
            if ((!args || args.phoneNumber === undefined) && !opts.urn) {
                throw new Error("Missing required property 'phoneNumber'");
            }
            if ((!args || args.postalCode === undefined) && !opts.urn) {
                throw new Error("Missing required property 'postalCode'");
            }
            resourceInputs["accountId"] = args ? args.accountId : undefined;
            resourceInputs["addressLine1"] = args ? args.addressLine1 : undefined;
            resourceInputs["addressLine2"] = args ? args.addressLine2 : undefined;
            resourceInputs["addressLine3"] = args ? args.addressLine3 : undefined;
            resourceInputs["city"] = args ? args.city : undefined;
            resourceInputs["companyName"] = args ? args.companyName : undefined;
            resourceInputs["countryCode"] = args ? args.countryCode : undefined;
            resourceInputs["districtOrCounty"] = args ? args.districtOrCounty : undefined;
            resourceInputs["fullName"] = args ? args.fullName : undefined;
            resourceInputs["phoneNumber"] = args ? args.phoneNumber : undefined;
            resourceInputs["postalCode"] = args ? args.postalCode : undefined;
            resourceInputs["stateOrRegion"] = args ? args.stateOrRegion : undefined;
            resourceInputs["websiteUrl"] = args ? args.websiteUrl : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AccountPrimaryContact.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AccountPrimaryContact resources.
 */
export interface AccountPrimaryContactState {
    accountId?: pulumi.Input<string>;
    addressLine1?: pulumi.Input<string>;
    addressLine2?: pulumi.Input<string>;
    addressLine3?: pulumi.Input<string>;
    city?: pulumi.Input<string>;
    companyName?: pulumi.Input<string>;
    countryCode?: pulumi.Input<string>;
    districtOrCounty?: pulumi.Input<string>;
    fullName?: pulumi.Input<string>;
    phoneNumber?: pulumi.Input<string>;
    postalCode?: pulumi.Input<string>;
    stateOrRegion?: pulumi.Input<string>;
    websiteUrl?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a AccountPrimaryContact resource.
 */
export interface AccountPrimaryContactArgs {
    accountId?: pulumi.Input<string>;
    addressLine1: pulumi.Input<string>;
    addressLine2?: pulumi.Input<string>;
    addressLine3?: pulumi.Input<string>;
    city: pulumi.Input<string>;
    companyName?: pulumi.Input<string>;
    countryCode: pulumi.Input<string>;
    districtOrCounty?: pulumi.Input<string>;
    fullName: pulumi.Input<string>;
    phoneNumber: pulumi.Input<string>;
    postalCode: pulumi.Input<string>;
    stateOrRegion?: pulumi.Input<string>;
    websiteUrl?: pulumi.Input<string>;
}
