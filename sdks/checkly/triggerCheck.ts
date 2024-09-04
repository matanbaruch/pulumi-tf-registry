// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class TriggerCheck extends pulumi.CustomResource {
    /**
     * Get an existing TriggerCheck resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TriggerCheckState, opts?: pulumi.CustomResourceOptions): TriggerCheck {
        return new TriggerCheck(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'checkly:index/triggerCheck:TriggerCheck';

    /**
     * Returns true if the given object is an instance of TriggerCheck.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TriggerCheck {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === TriggerCheck.__pulumiType;
    }

    /**
     * The id of the check that you want to attach the trigger to.
     */
    public readonly checkId!: pulumi.Output<string>;
    /**
     * The token value created to trigger the check
     */
    public readonly token!: pulumi.Output<string>;
    /**
     * The request URL to trigger the check run.
     */
    public readonly url!: pulumi.Output<string>;

    /**
     * Create a TriggerCheck resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TriggerCheckArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: TriggerCheckArgs | TriggerCheckState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as TriggerCheckState | undefined;
            resourceInputs["checkId"] = state ? state.checkId : undefined;
            resourceInputs["token"] = state ? state.token : undefined;
            resourceInputs["url"] = state ? state.url : undefined;
        } else {
            const args = argsOrState as TriggerCheckArgs | undefined;
            if ((!args || args.checkId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'checkId'");
            }
            resourceInputs["checkId"] = args ? args.checkId : undefined;
            resourceInputs["token"] = args ? args.token : undefined;
            resourceInputs["url"] = args ? args.url : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(TriggerCheck.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering TriggerCheck resources.
 */
export interface TriggerCheckState {
    /**
     * The id of the check that you want to attach the trigger to.
     */
    checkId?: pulumi.Input<string>;
    /**
     * The token value created to trigger the check
     */
    token?: pulumi.Input<string>;
    /**
     * The request URL to trigger the check run.
     */
    url?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a TriggerCheck resource.
 */
export interface TriggerCheckArgs {
    /**
     * The id of the check that you want to attach the trigger to.
     */
    checkId: pulumi.Input<string>;
    /**
     * The token value created to trigger the check
     */
    token?: pulumi.Input<string>;
    /**
     * The request URL to trigger the check run.
     */
    url?: pulumi.Input<string>;
}
