// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class BillingSubaccount extends pulumi.CustomResource {
    /**
     * Get an existing BillingSubaccount resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: BillingSubaccountState, opts?: pulumi.CustomResourceOptions): BillingSubaccount {
        return new BillingSubaccount(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google:index/billingSubaccount:BillingSubaccount';

    /**
     * Returns true if the given object is an instance of BillingSubaccount.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BillingSubaccount {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BillingSubaccount.__pulumiType;
    }

    public /*out*/ readonly billingAccountId!: pulumi.Output<string>;
    public readonly deletionPolicy!: pulumi.Output<string | undefined>;
    public readonly displayName!: pulumi.Output<string>;
    public readonly masterBillingAccount!: pulumi.Output<string>;
    public /*out*/ readonly name!: pulumi.Output<string>;
    public /*out*/ readonly open!: pulumi.Output<boolean>;

    /**
     * Create a BillingSubaccount resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BillingSubaccountArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: BillingSubaccountArgs | BillingSubaccountState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as BillingSubaccountState | undefined;
            resourceInputs["billingAccountId"] = state ? state.billingAccountId : undefined;
            resourceInputs["deletionPolicy"] = state ? state.deletionPolicy : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["masterBillingAccount"] = state ? state.masterBillingAccount : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["open"] = state ? state.open : undefined;
        } else {
            const args = argsOrState as BillingSubaccountArgs | undefined;
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            if ((!args || args.masterBillingAccount === undefined) && !opts.urn) {
                throw new Error("Missing required property 'masterBillingAccount'");
            }
            resourceInputs["deletionPolicy"] = args ? args.deletionPolicy : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["masterBillingAccount"] = args ? args.masterBillingAccount : undefined;
            resourceInputs["billingAccountId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["open"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(BillingSubaccount.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering BillingSubaccount resources.
 */
export interface BillingSubaccountState {
    billingAccountId?: pulumi.Input<string>;
    deletionPolicy?: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    masterBillingAccount?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    open?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a BillingSubaccount resource.
 */
export interface BillingSubaccountArgs {
    deletionPolicy?: pulumi.Input<string>;
    displayName: pulumi.Input<string>;
    masterBillingAccount: pulumi.Input<string>;
}
