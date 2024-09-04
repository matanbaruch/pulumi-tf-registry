// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class TfParamsAction extends pulumi.CustomResource {
    /**
     * Get an existing TfParamsAction resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TfParamsActionState, opts?: pulumi.CustomResourceOptions): TfParamsAction {
        return new TfParamsAction(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'volterra:index/tfParamsAction:TfParamsAction';

    /**
     * Returns true if the given object is an instance of TfParamsAction.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TfParamsAction {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === TfParamsAction.__pulumiType;
    }

    public readonly action!: pulumi.Output<string>;
    public readonly ignoreOnUpdate!: pulumi.Output<boolean | undefined>;
    public readonly siteKind!: pulumi.Output<string>;
    public readonly siteName!: pulumi.Output<string>;
    public /*out*/ readonly tfOutput!: pulumi.Output<string>;
    public readonly waitForAction!: pulumi.Output<boolean | undefined>;

    /**
     * Create a TfParamsAction resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TfParamsActionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: TfParamsActionArgs | TfParamsActionState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as TfParamsActionState | undefined;
            resourceInputs["action"] = state ? state.action : undefined;
            resourceInputs["ignoreOnUpdate"] = state ? state.ignoreOnUpdate : undefined;
            resourceInputs["siteKind"] = state ? state.siteKind : undefined;
            resourceInputs["siteName"] = state ? state.siteName : undefined;
            resourceInputs["tfOutput"] = state ? state.tfOutput : undefined;
            resourceInputs["waitForAction"] = state ? state.waitForAction : undefined;
        } else {
            const args = argsOrState as TfParamsActionArgs | undefined;
            if ((!args || args.action === undefined) && !opts.urn) {
                throw new Error("Missing required property 'action'");
            }
            if ((!args || args.siteKind === undefined) && !opts.urn) {
                throw new Error("Missing required property 'siteKind'");
            }
            if ((!args || args.siteName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'siteName'");
            }
            resourceInputs["action"] = args ? args.action : undefined;
            resourceInputs["ignoreOnUpdate"] = args ? args.ignoreOnUpdate : undefined;
            resourceInputs["siteKind"] = args ? args.siteKind : undefined;
            resourceInputs["siteName"] = args ? args.siteName : undefined;
            resourceInputs["waitForAction"] = args ? args.waitForAction : undefined;
            resourceInputs["tfOutput"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(TfParamsAction.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering TfParamsAction resources.
 */
export interface TfParamsActionState {
    action?: pulumi.Input<string>;
    ignoreOnUpdate?: pulumi.Input<boolean>;
    siteKind?: pulumi.Input<string>;
    siteName?: pulumi.Input<string>;
    tfOutput?: pulumi.Input<string>;
    waitForAction?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a TfParamsAction resource.
 */
export interface TfParamsActionArgs {
    action: pulumi.Input<string>;
    ignoreOnUpdate?: pulumi.Input<boolean>;
    siteKind: pulumi.Input<string>;
    siteName: pulumi.Input<string>;
    waitForAction?: pulumi.Input<boolean>;
}
