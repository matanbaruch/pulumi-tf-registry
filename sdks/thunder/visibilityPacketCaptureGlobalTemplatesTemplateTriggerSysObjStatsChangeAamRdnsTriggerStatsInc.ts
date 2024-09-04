// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamRdnsTriggerStatsInc extends pulumi.CustomResource {
    /**
     * Get an existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamRdnsTriggerStatsInc resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamRdnsTriggerStatsIncState, opts?: pulumi.CustomResourceOptions): VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamRdnsTriggerStatsInc {
        return new VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamRdnsTriggerStatsInc(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamRdnsTriggerStatsInc:VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamRdnsTriggerStatsInc';

    /**
     * Returns true if the given object is an instance of VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamRdnsTriggerStatsInc.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamRdnsTriggerStatsInc {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamRdnsTriggerStatsInc.__pulumiType;
    }

    /**
     * Name
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Enable automatic packet-capture for Total Dropped Request
     */
    public readonly requestDropped!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for Total Error Response
     */
    public readonly responseError!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for Total Failure Response
     */
    public readonly responseFailure!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for Total Timeout Response
     */
    public readonly responseTimeout!: pulumi.Output<number | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamRdnsTriggerStatsInc resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamRdnsTriggerStatsIncArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamRdnsTriggerStatsIncArgs | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamRdnsTriggerStatsIncState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamRdnsTriggerStatsIncState | undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["requestDropped"] = state ? state.requestDropped : undefined;
            resourceInputs["responseError"] = state ? state.responseError : undefined;
            resourceInputs["responseFailure"] = state ? state.responseFailure : undefined;
            resourceInputs["responseTimeout"] = state ? state.responseTimeout : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamRdnsTriggerStatsIncArgs | undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["requestDropped"] = args ? args.requestDropped : undefined;
            resourceInputs["responseError"] = args ? args.responseError : undefined;
            resourceInputs["responseFailure"] = args ? args.responseFailure : undefined;
            resourceInputs["responseTimeout"] = args ? args.responseTimeout : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamRdnsTriggerStatsInc.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamRdnsTriggerStatsInc resources.
 */
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamRdnsTriggerStatsIncState {
    /**
     * Name
     */
    name?: pulumi.Input<string>;
    /**
     * Enable automatic packet-capture for Total Dropped Request
     */
    requestDropped?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Total Error Response
     */
    responseError?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Total Failure Response
     */
    responseFailure?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Total Timeout Response
     */
    responseTimeout?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamRdnsTriggerStatsInc resource.
 */
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamRdnsTriggerStatsIncArgs {
    /**
     * Name
     */
    name?: pulumi.Input<string>;
    /**
     * Enable automatic packet-capture for Total Dropped Request
     */
    requestDropped?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Total Error Response
     */
    responseError?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Total Failure Response
     */
    responseFailure?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Total Timeout Response
     */
    responseTimeout?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
