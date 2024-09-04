// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class VisibilityPacketCaptureObjectTemplatesFwServiceGroupTmplTriggerStatsInc extends pulumi.CustomResource {
    /**
     * Get an existing VisibilityPacketCaptureObjectTemplatesFwServiceGroupTmplTriggerStatsInc resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VisibilityPacketCaptureObjectTemplatesFwServiceGroupTmplTriggerStatsIncState, opts?: pulumi.CustomResourceOptions): VisibilityPacketCaptureObjectTemplatesFwServiceGroupTmplTriggerStatsInc {
        return new VisibilityPacketCaptureObjectTemplatesFwServiceGroupTmplTriggerStatsInc(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/visibilityPacketCaptureObjectTemplatesFwServiceGroupTmplTriggerStatsInc:VisibilityPacketCaptureObjectTemplatesFwServiceGroupTmplTriggerStatsInc';

    /**
     * Returns true if the given object is an instance of VisibilityPacketCaptureObjectTemplatesFwServiceGroupTmplTriggerStatsInc.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VisibilityPacketCaptureObjectTemplatesFwServiceGroupTmplTriggerStatsInc {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VisibilityPacketCaptureObjectTemplatesFwServiceGroupTmplTriggerStatsInc.__pulumiType;
    }

    /**
     * Name
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Enable automatic packet-capture for Service selection fail reset
     */
    public readonly serverSelectionFailReset!: pulumi.Output<number | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a VisibilityPacketCaptureObjectTemplatesFwServiceGroupTmplTriggerStatsInc resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: VisibilityPacketCaptureObjectTemplatesFwServiceGroupTmplTriggerStatsIncArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VisibilityPacketCaptureObjectTemplatesFwServiceGroupTmplTriggerStatsIncArgs | VisibilityPacketCaptureObjectTemplatesFwServiceGroupTmplTriggerStatsIncState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VisibilityPacketCaptureObjectTemplatesFwServiceGroupTmplTriggerStatsIncState | undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["serverSelectionFailReset"] = state ? state.serverSelectionFailReset : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as VisibilityPacketCaptureObjectTemplatesFwServiceGroupTmplTriggerStatsIncArgs | undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["serverSelectionFailReset"] = args ? args.serverSelectionFailReset : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(VisibilityPacketCaptureObjectTemplatesFwServiceGroupTmplTriggerStatsInc.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering VisibilityPacketCaptureObjectTemplatesFwServiceGroupTmplTriggerStatsInc resources.
 */
export interface VisibilityPacketCaptureObjectTemplatesFwServiceGroupTmplTriggerStatsIncState {
    /**
     * Name
     */
    name?: pulumi.Input<string>;
    /**
     * Enable automatic packet-capture for Service selection fail reset
     */
    serverSelectionFailReset?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a VisibilityPacketCaptureObjectTemplatesFwServiceGroupTmplTriggerStatsInc resource.
 */
export interface VisibilityPacketCaptureObjectTemplatesFwServiceGroupTmplTriggerStatsIncArgs {
    /**
     * Name
     */
    name?: pulumi.Input<string>;
    /**
     * Enable automatic packet-capture for Service selection fail reset
     */
    serverSelectionFailReset?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
