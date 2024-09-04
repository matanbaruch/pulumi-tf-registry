// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class VisibilityPacketCaptureObjectTemplatesSlbPortTmpl extends pulumi.CustomResource {
    /**
     * Get an existing VisibilityPacketCaptureObjectTemplatesSlbPortTmpl resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VisibilityPacketCaptureObjectTemplatesSlbPortTmplState, opts?: pulumi.CustomResourceOptions): VisibilityPacketCaptureObjectTemplatesSlbPortTmpl {
        return new VisibilityPacketCaptureObjectTemplatesSlbPortTmpl(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/visibilityPacketCaptureObjectTemplatesSlbPortTmpl:VisibilityPacketCaptureObjectTemplatesSlbPortTmpl';

    /**
     * Returns true if the given object is an instance of VisibilityPacketCaptureObjectTemplatesSlbPortTmpl.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VisibilityPacketCaptureObjectTemplatesSlbPortTmpl {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VisibilityPacketCaptureObjectTemplatesSlbPortTmpl.__pulumiType;
    }

    /**
     * Specify name of the capture-config to use with this template
     */
    public readonly captureConfig!: pulumi.Output<string | undefined>;
    /**
     * Packet Capture Template Name
     */
    public readonly name!: pulumi.Output<string>;
    public readonly triggerStatsInc!: pulumi.Output<outputs.VisibilityPacketCaptureObjectTemplatesSlbPortTmplTriggerStatsInc | undefined>;
    public readonly triggerStatsRate!: pulumi.Output<outputs.VisibilityPacketCaptureObjectTemplatesSlbPortTmplTriggerStatsRate | undefined>;
    public readonly triggerStatsSeverity!: pulumi.Output<outputs.VisibilityPacketCaptureObjectTemplatesSlbPortTmplTriggerStatsSeverity | undefined>;
    /**
     * Customized tag
     */
    public readonly userTag!: pulumi.Output<string | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a VisibilityPacketCaptureObjectTemplatesSlbPortTmpl resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: VisibilityPacketCaptureObjectTemplatesSlbPortTmplArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VisibilityPacketCaptureObjectTemplatesSlbPortTmplArgs | VisibilityPacketCaptureObjectTemplatesSlbPortTmplState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VisibilityPacketCaptureObjectTemplatesSlbPortTmplState | undefined;
            resourceInputs["captureConfig"] = state ? state.captureConfig : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["triggerStatsInc"] = state ? state.triggerStatsInc : undefined;
            resourceInputs["triggerStatsRate"] = state ? state.triggerStatsRate : undefined;
            resourceInputs["triggerStatsSeverity"] = state ? state.triggerStatsSeverity : undefined;
            resourceInputs["userTag"] = state ? state.userTag : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as VisibilityPacketCaptureObjectTemplatesSlbPortTmplArgs | undefined;
            resourceInputs["captureConfig"] = args ? args.captureConfig : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["triggerStatsInc"] = args ? args.triggerStatsInc : undefined;
            resourceInputs["triggerStatsRate"] = args ? args.triggerStatsRate : undefined;
            resourceInputs["triggerStatsSeverity"] = args ? args.triggerStatsSeverity : undefined;
            resourceInputs["userTag"] = args ? args.userTag : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(VisibilityPacketCaptureObjectTemplatesSlbPortTmpl.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering VisibilityPacketCaptureObjectTemplatesSlbPortTmpl resources.
 */
export interface VisibilityPacketCaptureObjectTemplatesSlbPortTmplState {
    /**
     * Specify name of the capture-config to use with this template
     */
    captureConfig?: pulumi.Input<string>;
    /**
     * Packet Capture Template Name
     */
    name?: pulumi.Input<string>;
    triggerStatsInc?: pulumi.Input<inputs.VisibilityPacketCaptureObjectTemplatesSlbPortTmplTriggerStatsInc>;
    triggerStatsRate?: pulumi.Input<inputs.VisibilityPacketCaptureObjectTemplatesSlbPortTmplTriggerStatsRate>;
    triggerStatsSeverity?: pulumi.Input<inputs.VisibilityPacketCaptureObjectTemplatesSlbPortTmplTriggerStatsSeverity>;
    /**
     * Customized tag
     */
    userTag?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a VisibilityPacketCaptureObjectTemplatesSlbPortTmpl resource.
 */
export interface VisibilityPacketCaptureObjectTemplatesSlbPortTmplArgs {
    /**
     * Specify name of the capture-config to use with this template
     */
    captureConfig?: pulumi.Input<string>;
    /**
     * Packet Capture Template Name
     */
    name?: pulumi.Input<string>;
    triggerStatsInc?: pulumi.Input<inputs.VisibilityPacketCaptureObjectTemplatesSlbPortTmplTriggerStatsInc>;
    triggerStatsRate?: pulumi.Input<inputs.VisibilityPacketCaptureObjectTemplatesSlbPortTmplTriggerStatsRate>;
    triggerStatsSeverity?: pulumi.Input<inputs.VisibilityPacketCaptureObjectTemplatesSlbPortTmplTriggerStatsSeverity>;
    /**
     * Customized tag
     */
    userTag?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
