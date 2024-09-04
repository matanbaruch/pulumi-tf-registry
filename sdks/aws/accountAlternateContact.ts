// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class AccountAlternateContact extends pulumi.CustomResource {
    /**
     * Get an existing AccountAlternateContact resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AccountAlternateContactState, opts?: pulumi.CustomResourceOptions): AccountAlternateContact {
        return new AccountAlternateContact(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/accountAlternateContact:AccountAlternateContact';

    /**
     * Returns true if the given object is an instance of AccountAlternateContact.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AccountAlternateContact {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AccountAlternateContact.__pulumiType;
    }

    public readonly accountId!: pulumi.Output<string | undefined>;
    public readonly alternateContactType!: pulumi.Output<string>;
    public readonly emailAddress!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly phoneNumber!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.AccountAlternateContactTimeouts | undefined>;
    public readonly title!: pulumi.Output<string>;

    /**
     * Create a AccountAlternateContact resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AccountAlternateContactArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AccountAlternateContactArgs | AccountAlternateContactState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AccountAlternateContactState | undefined;
            resourceInputs["accountId"] = state ? state.accountId : undefined;
            resourceInputs["alternateContactType"] = state ? state.alternateContactType : undefined;
            resourceInputs["emailAddress"] = state ? state.emailAddress : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["phoneNumber"] = state ? state.phoneNumber : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["title"] = state ? state.title : undefined;
        } else {
            const args = argsOrState as AccountAlternateContactArgs | undefined;
            if ((!args || args.alternateContactType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'alternateContactType'");
            }
            if ((!args || args.emailAddress === undefined) && !opts.urn) {
                throw new Error("Missing required property 'emailAddress'");
            }
            if ((!args || args.phoneNumber === undefined) && !opts.urn) {
                throw new Error("Missing required property 'phoneNumber'");
            }
            if ((!args || args.title === undefined) && !opts.urn) {
                throw new Error("Missing required property 'title'");
            }
            resourceInputs["accountId"] = args ? args.accountId : undefined;
            resourceInputs["alternateContactType"] = args ? args.alternateContactType : undefined;
            resourceInputs["emailAddress"] = args ? args.emailAddress : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["phoneNumber"] = args ? args.phoneNumber : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["title"] = args ? args.title : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AccountAlternateContact.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AccountAlternateContact resources.
 */
export interface AccountAlternateContactState {
    accountId?: pulumi.Input<string>;
    alternateContactType?: pulumi.Input<string>;
    emailAddress?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    phoneNumber?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.AccountAlternateContactTimeouts>;
    title?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a AccountAlternateContact resource.
 */
export interface AccountAlternateContactArgs {
    accountId?: pulumi.Input<string>;
    alternateContactType: pulumi.Input<string>;
    emailAddress: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    phoneNumber: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.AccountAlternateContactTimeouts>;
    title: pulumi.Input<string>;
}
