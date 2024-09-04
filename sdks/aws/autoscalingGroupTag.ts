// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class AutoscalingGroupTag extends pulumi.CustomResource {
    /**
     * Get an existing AutoscalingGroupTag resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AutoscalingGroupTagState, opts?: pulumi.CustomResourceOptions): AutoscalingGroupTag {
        return new AutoscalingGroupTag(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/autoscalingGroupTag:AutoscalingGroupTag';

    /**
     * Returns true if the given object is an instance of AutoscalingGroupTag.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AutoscalingGroupTag {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AutoscalingGroupTag.__pulumiType;
    }

    public readonly autoscalingGroupName!: pulumi.Output<string>;
    public readonly tag!: pulumi.Output<outputs.AutoscalingGroupTagTag>;

    /**
     * Create a AutoscalingGroupTag resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AutoscalingGroupTagArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AutoscalingGroupTagArgs | AutoscalingGroupTagState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AutoscalingGroupTagState | undefined;
            resourceInputs["autoscalingGroupName"] = state ? state.autoscalingGroupName : undefined;
            resourceInputs["tag"] = state ? state.tag : undefined;
        } else {
            const args = argsOrState as AutoscalingGroupTagArgs | undefined;
            if ((!args || args.autoscalingGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'autoscalingGroupName'");
            }
            if ((!args || args.tag === undefined) && !opts.urn) {
                throw new Error("Missing required property 'tag'");
            }
            resourceInputs["autoscalingGroupName"] = args ? args.autoscalingGroupName : undefined;
            resourceInputs["tag"] = args ? args.tag : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AutoscalingGroupTag.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AutoscalingGroupTag resources.
 */
export interface AutoscalingGroupTagState {
    autoscalingGroupName?: pulumi.Input<string>;
    tag?: pulumi.Input<inputs.AutoscalingGroupTagTag>;
}

/**
 * The set of arguments for constructing a AutoscalingGroupTag resource.
 */
export interface AutoscalingGroupTagArgs {
    autoscalingGroupName: pulumi.Input<string>;
    tag: pulumi.Input<inputs.AutoscalingGroupTagTag>;
}
