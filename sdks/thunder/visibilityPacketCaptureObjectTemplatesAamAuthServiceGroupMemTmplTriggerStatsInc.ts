// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class VisibilityPacketCaptureObjectTemplatesAamAuthServiceGroupMemTmplTriggerStatsInc extends pulumi.CustomResource {
    /**
     * Get an existing VisibilityPacketCaptureObjectTemplatesAamAuthServiceGroupMemTmplTriggerStatsInc resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VisibilityPacketCaptureObjectTemplatesAamAuthServiceGroupMemTmplTriggerStatsIncState, opts?: pulumi.CustomResourceOptions): VisibilityPacketCaptureObjectTemplatesAamAuthServiceGroupMemTmplTriggerStatsInc {
        return new VisibilityPacketCaptureObjectTemplatesAamAuthServiceGroupMemTmplTriggerStatsInc(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/visibilityPacketCaptureObjectTemplatesAamAuthServiceGroupMemTmplTriggerStatsInc:VisibilityPacketCaptureObjectTemplatesAamAuthServiceGroupMemTmplTriggerStatsInc';

    /**
     * Returns true if the given object is an instance of VisibilityPacketCaptureObjectTemplatesAamAuthServiceGroupMemTmplTriggerStatsInc.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VisibilityPacketCaptureObjectTemplatesAamAuthServiceGroupMemTmplTriggerStatsInc {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VisibilityPacketCaptureObjectTemplatesAamAuthServiceGroupMemTmplTriggerStatsInc.__pulumiType;
    }

    /**
     * Enable automatic packet-capture for Current connection counter overflow count
     */
    public readonly currConnOverflow!: pulumi.Output<number | undefined>;
    /**
     * Name
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a VisibilityPacketCaptureObjectTemplatesAamAuthServiceGroupMemTmplTriggerStatsInc resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: VisibilityPacketCaptureObjectTemplatesAamAuthServiceGroupMemTmplTriggerStatsIncArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VisibilityPacketCaptureObjectTemplatesAamAuthServiceGroupMemTmplTriggerStatsIncArgs | VisibilityPacketCaptureObjectTemplatesAamAuthServiceGroupMemTmplTriggerStatsIncState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VisibilityPacketCaptureObjectTemplatesAamAuthServiceGroupMemTmplTriggerStatsIncState | undefined;
            resourceInputs["currConnOverflow"] = state ? state.currConnOverflow : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as VisibilityPacketCaptureObjectTemplatesAamAuthServiceGroupMemTmplTriggerStatsIncArgs | undefined;
            resourceInputs["currConnOverflow"] = args ? args.currConnOverflow : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(VisibilityPacketCaptureObjectTemplatesAamAuthServiceGroupMemTmplTriggerStatsInc.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering VisibilityPacketCaptureObjectTemplatesAamAuthServiceGroupMemTmplTriggerStatsInc resources.
 */
export interface VisibilityPacketCaptureObjectTemplatesAamAuthServiceGroupMemTmplTriggerStatsIncState {
    /**
     * Enable automatic packet-capture for Current connection counter overflow count
     */
    currConnOverflow?: pulumi.Input<number>;
    /**
     * Name
     */
    name?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a VisibilityPacketCaptureObjectTemplatesAamAuthServiceGroupMemTmplTriggerStatsInc resource.
 */
export interface VisibilityPacketCaptureObjectTemplatesAamAuthServiceGroupMemTmplTriggerStatsIncArgs {
    /**
     * Enable automatic packet-capture for Current connection counter overflow count
     */
    currConnOverflow?: pulumi.Input<number>;
    /**
     * Name
     */
    name?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
