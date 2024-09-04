// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class BillingProjectInfo extends pulumi.CustomResource {
    /**
     * Get an existing BillingProjectInfo resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: BillingProjectInfoState, opts?: pulumi.CustomResourceOptions): BillingProjectInfo {
        return new BillingProjectInfo(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google:index/billingProjectInfo:BillingProjectInfo';

    /**
     * Returns true if the given object is an instance of BillingProjectInfo.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BillingProjectInfo {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BillingProjectInfo.__pulumiType;
    }

    /**
     * The ID of the billing account associated with the project, if any. Set to empty string to disable billing for the
     * project. For example, '"012345-567890-ABCDEF"' or '""'.
     */
    public readonly billingAccount!: pulumi.Output<string>;
    public readonly project!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.BillingProjectInfoTimeouts | undefined>;

    /**
     * Create a BillingProjectInfo resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BillingProjectInfoArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: BillingProjectInfoArgs | BillingProjectInfoState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as BillingProjectInfoState | undefined;
            resourceInputs["billingAccount"] = state ? state.billingAccount : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as BillingProjectInfoArgs | undefined;
            if ((!args || args.billingAccount === undefined) && !opts.urn) {
                throw new Error("Missing required property 'billingAccount'");
            }
            resourceInputs["billingAccount"] = args ? args.billingAccount : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(BillingProjectInfo.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering BillingProjectInfo resources.
 */
export interface BillingProjectInfoState {
    /**
     * The ID of the billing account associated with the project, if any. Set to empty string to disable billing for the
     * project. For example, '"012345-567890-ABCDEF"' or '""'.
     */
    billingAccount?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.BillingProjectInfoTimeouts>;
}

/**
 * The set of arguments for constructing a BillingProjectInfo resource.
 */
export interface BillingProjectInfoArgs {
    /**
     * The ID of the billing account associated with the project, if any. Set to empty string to disable billing for the
     * project. For example, '"012345-567890-ABCDEF"' or '""'.
     */
    billingAccount: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.BillingProjectInfoTimeouts>;
}
