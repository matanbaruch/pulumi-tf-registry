// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsInc extends pulumi.CustomResource {
    /**
     * Get an existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsInc resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsIncState, opts?: pulumi.CustomResourceOptions): VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsInc {
        return new VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsInc(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsInc:VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsInc';

    /**
     * Returns true if the given object is an instance of VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsInc.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsInc {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsInc.__pulumiType;
    }

    /**
     * Enable automatic packet-capture for Number of client failures
     */
    public readonly clientFail!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for Fail to select client
     */
    public readonly clientSelectFail!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for Diameter cross cpu error
     */
    public readonly dcmsgError!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for AVP value contains illegal chars
     */
    public readonly invalidAvp!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for Diameter mismatch fwd session id
     */
    public readonly mismatchFwdId!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for Diameter mismatch rev session id
     */
    public readonly mismatchRevId!: pulumi.Output<number | undefined>;
    /**
     * Name
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Enable automatic packet-capture for Diameter no fwd tuple matched
     */
    public readonly noFwdTuple!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for Diameter no rev tuple matched
     */
    public readonly noRevTuple!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for Number of no routes
     */
    public readonly noRoute!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for Diameter no session id avp
     */
    public readonly noSessionId!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for Fail to reply error info to peer
     */
    public readonly replyErrorInfoFail!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for Reply with unknown session ID error info
     */
    public readonly replyUnknownSessionId!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for Diameter retry client request fail
     */
    public readonly retryClientRequestFail!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for Number of server failures
     */
    public readonly serverFail!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for Number of snat failures
     */
    public readonly snatFail!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for Number of server selection failed
     */
    public readonly svrselFail!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for Diameter unkown cmd code
     */
    public readonly unkwnCmdCode!: pulumi.Output<number | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsInc resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsIncArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsIncArgs | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsIncState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsIncState | undefined;
            resourceInputs["clientFail"] = state ? state.clientFail : undefined;
            resourceInputs["clientSelectFail"] = state ? state.clientSelectFail : undefined;
            resourceInputs["dcmsgError"] = state ? state.dcmsgError : undefined;
            resourceInputs["invalidAvp"] = state ? state.invalidAvp : undefined;
            resourceInputs["mismatchFwdId"] = state ? state.mismatchFwdId : undefined;
            resourceInputs["mismatchRevId"] = state ? state.mismatchRevId : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["noFwdTuple"] = state ? state.noFwdTuple : undefined;
            resourceInputs["noRevTuple"] = state ? state.noRevTuple : undefined;
            resourceInputs["noRoute"] = state ? state.noRoute : undefined;
            resourceInputs["noSessionId"] = state ? state.noSessionId : undefined;
            resourceInputs["replyErrorInfoFail"] = state ? state.replyErrorInfoFail : undefined;
            resourceInputs["replyUnknownSessionId"] = state ? state.replyUnknownSessionId : undefined;
            resourceInputs["retryClientRequestFail"] = state ? state.retryClientRequestFail : undefined;
            resourceInputs["serverFail"] = state ? state.serverFail : undefined;
            resourceInputs["snatFail"] = state ? state.snatFail : undefined;
            resourceInputs["svrselFail"] = state ? state.svrselFail : undefined;
            resourceInputs["unkwnCmdCode"] = state ? state.unkwnCmdCode : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsIncArgs | undefined;
            resourceInputs["clientFail"] = args ? args.clientFail : undefined;
            resourceInputs["clientSelectFail"] = args ? args.clientSelectFail : undefined;
            resourceInputs["dcmsgError"] = args ? args.dcmsgError : undefined;
            resourceInputs["invalidAvp"] = args ? args.invalidAvp : undefined;
            resourceInputs["mismatchFwdId"] = args ? args.mismatchFwdId : undefined;
            resourceInputs["mismatchRevId"] = args ? args.mismatchRevId : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["noFwdTuple"] = args ? args.noFwdTuple : undefined;
            resourceInputs["noRevTuple"] = args ? args.noRevTuple : undefined;
            resourceInputs["noRoute"] = args ? args.noRoute : undefined;
            resourceInputs["noSessionId"] = args ? args.noSessionId : undefined;
            resourceInputs["replyErrorInfoFail"] = args ? args.replyErrorInfoFail : undefined;
            resourceInputs["replyUnknownSessionId"] = args ? args.replyUnknownSessionId : undefined;
            resourceInputs["retryClientRequestFail"] = args ? args.retryClientRequestFail : undefined;
            resourceInputs["serverFail"] = args ? args.serverFail : undefined;
            resourceInputs["snatFail"] = args ? args.snatFail : undefined;
            resourceInputs["svrselFail"] = args ? args.svrselFail : undefined;
            resourceInputs["unkwnCmdCode"] = args ? args.unkwnCmdCode : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsInc.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsInc resources.
 */
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsIncState {
    /**
     * Enable automatic packet-capture for Number of client failures
     */
    clientFail?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Fail to select client
     */
    clientSelectFail?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Diameter cross cpu error
     */
    dcmsgError?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for AVP value contains illegal chars
     */
    invalidAvp?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Diameter mismatch fwd session id
     */
    mismatchFwdId?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Diameter mismatch rev session id
     */
    mismatchRevId?: pulumi.Input<number>;
    /**
     * Name
     */
    name?: pulumi.Input<string>;
    /**
     * Enable automatic packet-capture for Diameter no fwd tuple matched
     */
    noFwdTuple?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Diameter no rev tuple matched
     */
    noRevTuple?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Number of no routes
     */
    noRoute?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Diameter no session id avp
     */
    noSessionId?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Fail to reply error info to peer
     */
    replyErrorInfoFail?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Reply with unknown session ID error info
     */
    replyUnknownSessionId?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Diameter retry client request fail
     */
    retryClientRequestFail?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Number of server failures
     */
    serverFail?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Number of snat failures
     */
    snatFail?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Number of server selection failed
     */
    svrselFail?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Diameter unkown cmd code
     */
    unkwnCmdCode?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsInc resource.
 */
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsIncArgs {
    /**
     * Enable automatic packet-capture for Number of client failures
     */
    clientFail?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Fail to select client
     */
    clientSelectFail?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Diameter cross cpu error
     */
    dcmsgError?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for AVP value contains illegal chars
     */
    invalidAvp?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Diameter mismatch fwd session id
     */
    mismatchFwdId?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Diameter mismatch rev session id
     */
    mismatchRevId?: pulumi.Input<number>;
    /**
     * Name
     */
    name?: pulumi.Input<string>;
    /**
     * Enable automatic packet-capture for Diameter no fwd tuple matched
     */
    noFwdTuple?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Diameter no rev tuple matched
     */
    noRevTuple?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Number of no routes
     */
    noRoute?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Diameter no session id avp
     */
    noSessionId?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Fail to reply error info to peer
     */
    replyErrorInfoFail?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Reply with unknown session ID error info
     */
    replyUnknownSessionId?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Diameter retry client request fail
     */
    retryClientRequestFail?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Number of server failures
     */
    serverFail?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Number of snat failures
     */
    snatFail?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Number of server selection failed
     */
    svrselFail?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Diameter unkown cmd code
     */
    unkwnCmdCode?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
