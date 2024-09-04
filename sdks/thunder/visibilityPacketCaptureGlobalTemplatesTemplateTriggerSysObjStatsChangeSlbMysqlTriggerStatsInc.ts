// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMysqlTriggerStatsInc extends pulumi.CustomResource {
    /**
     * Get an existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMysqlTriggerStatsInc resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMysqlTriggerStatsIncState, opts?: pulumi.CustomResourceOptions): VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMysqlTriggerStatsInc {
        return new VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMysqlTriggerStatsInc(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMysqlTriggerStatsInc:VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMysqlTriggerStatsInc';

    /**
     * Returns true if the given object is an instance of VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMysqlTriggerStatsInc.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMysqlTriggerStatsInc {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMysqlTriggerStatsInc.__pulumiType;
    }

    /**
     * Name
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Enable automatic packet-capture for Session err
     */
    public readonly sessionErr!: pulumi.Output<number | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMysqlTriggerStatsInc resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMysqlTriggerStatsIncArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMysqlTriggerStatsIncArgs | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMysqlTriggerStatsIncState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMysqlTriggerStatsIncState | undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["sessionErr"] = state ? state.sessionErr : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMysqlTriggerStatsIncArgs | undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["sessionErr"] = args ? args.sessionErr : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMysqlTriggerStatsInc.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMysqlTriggerStatsInc resources.
 */
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMysqlTriggerStatsIncState {
    /**
     * Name
     */
    name?: pulumi.Input<string>;
    /**
     * Enable automatic packet-capture for Session err
     */
    sessionErr?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMysqlTriggerStatsInc resource.
 */
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbMysqlTriggerStatsIncArgs {
    /**
     * Name
     */
    name?: pulumi.Input<string>;
    /**
     * Enable automatic packet-capture for Session err
     */
    sessionErr?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
