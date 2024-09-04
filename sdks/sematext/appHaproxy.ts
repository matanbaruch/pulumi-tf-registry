// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class AppHaproxy extends pulumi.CustomResource {
    /**
     * Get an existing AppHaproxy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AppHaproxyState, opts?: pulumi.CustomResourceOptions): AppHaproxy {
        return new AppHaproxy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'sematext:index/appHaproxy:AppHaproxy';

    /**
     * Returns true if the given object is an instance of AppHaproxy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AppHaproxy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AppHaproxy.__pulumiType;
    }

    /**
     * (required) apptoken(s) attached to the monitor app in Sematext Cloud.
     */
    public readonly apptokens!: pulumi.Output<outputs.AppHaproxyApptoken[]>;
    /**
     * (Required) Plan ID attached to the monitor app in Sematext Cloud.
     */
    public readonly billingPlanId!: pulumi.Output<number>;
    /**
     * (Optional) Iniitial discount code attached to the monitor app in Sematext Cloud.
     */
    public readonly discountCode!: pulumi.Output<string | undefined>;
    /**
     * (Required) Label for the monitor app in Sematext Cloud.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Map of apptoken name > id. Calculated, supplied by SC Cloud.
     */
    public /*out*/ readonly scApptokenEntries!: pulumi.Output<{[key: string]: string}>;

    /**
     * Create a AppHaproxy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AppHaproxyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AppHaproxyArgs | AppHaproxyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AppHaproxyState | undefined;
            resourceInputs["apptokens"] = state ? state.apptokens : undefined;
            resourceInputs["billingPlanId"] = state ? state.billingPlanId : undefined;
            resourceInputs["discountCode"] = state ? state.discountCode : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["scApptokenEntries"] = state ? state.scApptokenEntries : undefined;
        } else {
            const args = argsOrState as AppHaproxyArgs | undefined;
            if ((!args || args.apptokens === undefined) && !opts.urn) {
                throw new Error("Missing required property 'apptokens'");
            }
            if ((!args || args.billingPlanId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'billingPlanId'");
            }
            resourceInputs["apptokens"] = args ? args.apptokens : undefined;
            resourceInputs["billingPlanId"] = args ? args.billingPlanId : undefined;
            resourceInputs["discountCode"] = args ? args.discountCode : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["scApptokenEntries"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AppHaproxy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AppHaproxy resources.
 */
export interface AppHaproxyState {
    /**
     * (required) apptoken(s) attached to the monitor app in Sematext Cloud.
     */
    apptokens?: pulumi.Input<pulumi.Input<inputs.AppHaproxyApptoken>[]>;
    /**
     * (Required) Plan ID attached to the monitor app in Sematext Cloud.
     */
    billingPlanId?: pulumi.Input<number>;
    /**
     * (Optional) Iniitial discount code attached to the monitor app in Sematext Cloud.
     */
    discountCode?: pulumi.Input<string>;
    /**
     * (Required) Label for the monitor app in Sematext Cloud.
     */
    name?: pulumi.Input<string>;
    /**
     * Map of apptoken name > id. Calculated, supplied by SC Cloud.
     */
    scApptokenEntries?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * The set of arguments for constructing a AppHaproxy resource.
 */
export interface AppHaproxyArgs {
    /**
     * (required) apptoken(s) attached to the monitor app in Sematext Cloud.
     */
    apptokens: pulumi.Input<pulumi.Input<inputs.AppHaproxyApptoken>[]>;
    /**
     * (Required) Plan ID attached to the monitor app in Sematext Cloud.
     */
    billingPlanId: pulumi.Input<number>;
    /**
     * (Optional) Iniitial discount code attached to the monitor app in Sematext Cloud.
     */
    discountCode?: pulumi.Input<string>;
    /**
     * (Required) Label for the monitor app in Sematext Cloud.
     */
    name?: pulumi.Input<string>;
}
