// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7sessionTriggerStatsInc extends pulumi.CustomResource {
    /**
     * Get an existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7sessionTriggerStatsInc resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7sessionTriggerStatsIncState, opts?: pulumi.CustomResourceOptions): VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7sessionTriggerStatsInc {
        return new VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7sessionTriggerStatsInc(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7sessionTriggerStatsInc:VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7sessionTriggerStatsInc';

    /**
     * Returns true if the given object is an instance of VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7sessionTriggerStatsInc.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7sessionTriggerStatsInc {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7sessionTriggerStatsInc.__pulumiType;
    }

    /**
     * Enable automatic packet-capture for Conn does not exist
     */
    public readonly connNotExist!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for Data event callback fail
     */
    public readonly dataCbFailed!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for Err event callback failed
     */
    public readonly errCbFailed!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for Err event from TCP
     */
    public readonly errEvent!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for Fwd req fail
     */
    public readonly hpsFwdreqFail!: pulumi.Output<number | undefined>;
    /**
     * Name
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Enable automatic packet-capture for Server connection failed
     */
    public readonly serverConnFailed!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for Server selection fail
     */
    public readonly serverSelectFail!: pulumi.Output<number | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;
    /**
     * Enable automatic packet-capture for Wbuf event callback failed
     */
    public readonly wbufCbFailed!: pulumi.Output<number | undefined>;

    /**
     * Create a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7sessionTriggerStatsInc resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7sessionTriggerStatsIncArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7sessionTriggerStatsIncArgs | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7sessionTriggerStatsIncState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7sessionTriggerStatsIncState | undefined;
            resourceInputs["connNotExist"] = state ? state.connNotExist : undefined;
            resourceInputs["dataCbFailed"] = state ? state.dataCbFailed : undefined;
            resourceInputs["errCbFailed"] = state ? state.errCbFailed : undefined;
            resourceInputs["errEvent"] = state ? state.errEvent : undefined;
            resourceInputs["hpsFwdreqFail"] = state ? state.hpsFwdreqFail : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["serverConnFailed"] = state ? state.serverConnFailed : undefined;
            resourceInputs["serverSelectFail"] = state ? state.serverSelectFail : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
            resourceInputs["wbufCbFailed"] = state ? state.wbufCbFailed : undefined;
        } else {
            const args = argsOrState as VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7sessionTriggerStatsIncArgs | undefined;
            resourceInputs["connNotExist"] = args ? args.connNotExist : undefined;
            resourceInputs["dataCbFailed"] = args ? args.dataCbFailed : undefined;
            resourceInputs["errCbFailed"] = args ? args.errCbFailed : undefined;
            resourceInputs["errEvent"] = args ? args.errEvent : undefined;
            resourceInputs["hpsFwdreqFail"] = args ? args.hpsFwdreqFail : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["serverConnFailed"] = args ? args.serverConnFailed : undefined;
            resourceInputs["serverSelectFail"] = args ? args.serverSelectFail : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
            resourceInputs["wbufCbFailed"] = args ? args.wbufCbFailed : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7sessionTriggerStatsInc.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7sessionTriggerStatsInc resources.
 */
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7sessionTriggerStatsIncState {
    /**
     * Enable automatic packet-capture for Conn does not exist
     */
    connNotExist?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Data event callback fail
     */
    dataCbFailed?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Err event callback failed
     */
    errCbFailed?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Err event from TCP
     */
    errEvent?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Fwd req fail
     */
    hpsFwdreqFail?: pulumi.Input<number>;
    /**
     * Name
     */
    name?: pulumi.Input<string>;
    /**
     * Enable automatic packet-capture for Server connection failed
     */
    serverConnFailed?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Server selection fail
     */
    serverSelectFail?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
    /**
     * Enable automatic packet-capture for Wbuf event callback failed
     */
    wbufCbFailed?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7sessionTriggerStatsInc resource.
 */
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7sessionTriggerStatsIncArgs {
    /**
     * Enable automatic packet-capture for Conn does not exist
     */
    connNotExist?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Data event callback fail
     */
    dataCbFailed?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Err event callback failed
     */
    errCbFailed?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Err event from TCP
     */
    errEvent?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Fwd req fail
     */
    hpsFwdreqFail?: pulumi.Input<number>;
    /**
     * Name
     */
    name?: pulumi.Input<string>;
    /**
     * Enable automatic packet-capture for Server connection failed
     */
    serverConnFailed?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Server selection fail
     */
    serverSelectFail?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
    /**
     * Enable automatic packet-capture for Wbuf event callback failed
     */
    wbufCbFailed?: pulumi.Input<number>;
}
