// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SmartagFlowLog extends pulumi.CustomResource {
    /**
     * Get an existing SmartagFlowLog resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SmartagFlowLogState, opts?: pulumi.CustomResourceOptions): SmartagFlowLog {
        return new SmartagFlowLog(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'alicloud:index/smartagFlowLog:SmartagFlowLog';

    /**
     * Returns true if the given object is an instance of SmartagFlowLog.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SmartagFlowLog {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SmartagFlowLog.__pulumiType;
    }

    public readonly activeAging!: pulumi.Output<number>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly flowLogName!: pulumi.Output<string | undefined>;
    public readonly inactiveAging!: pulumi.Output<number>;
    public readonly logstoreName!: pulumi.Output<string | undefined>;
    public readonly netflowServerIp!: pulumi.Output<string | undefined>;
    public readonly netflowServerPort!: pulumi.Output<number>;
    public readonly netflowVersion!: pulumi.Output<string>;
    public readonly outputType!: pulumi.Output<string>;
    public readonly projectName!: pulumi.Output<string | undefined>;
    public readonly slsRegionId!: pulumi.Output<string | undefined>;
    public readonly status!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.SmartagFlowLogTimeouts | undefined>;

    /**
     * Create a SmartagFlowLog resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SmartagFlowLogArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SmartagFlowLogArgs | SmartagFlowLogState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SmartagFlowLogState | undefined;
            resourceInputs["activeAging"] = state ? state.activeAging : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["flowLogName"] = state ? state.flowLogName : undefined;
            resourceInputs["inactiveAging"] = state ? state.inactiveAging : undefined;
            resourceInputs["logstoreName"] = state ? state.logstoreName : undefined;
            resourceInputs["netflowServerIp"] = state ? state.netflowServerIp : undefined;
            resourceInputs["netflowServerPort"] = state ? state.netflowServerPort : undefined;
            resourceInputs["netflowVersion"] = state ? state.netflowVersion : undefined;
            resourceInputs["outputType"] = state ? state.outputType : undefined;
            resourceInputs["projectName"] = state ? state.projectName : undefined;
            resourceInputs["slsRegionId"] = state ? state.slsRegionId : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as SmartagFlowLogArgs | undefined;
            if ((!args || args.outputType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'outputType'");
            }
            resourceInputs["activeAging"] = args ? args.activeAging : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["flowLogName"] = args ? args.flowLogName : undefined;
            resourceInputs["inactiveAging"] = args ? args.inactiveAging : undefined;
            resourceInputs["logstoreName"] = args ? args.logstoreName : undefined;
            resourceInputs["netflowServerIp"] = args ? args.netflowServerIp : undefined;
            resourceInputs["netflowServerPort"] = args ? args.netflowServerPort : undefined;
            resourceInputs["netflowVersion"] = args ? args.netflowVersion : undefined;
            resourceInputs["outputType"] = args ? args.outputType : undefined;
            resourceInputs["projectName"] = args ? args.projectName : undefined;
            resourceInputs["slsRegionId"] = args ? args.slsRegionId : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SmartagFlowLog.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SmartagFlowLog resources.
 */
export interface SmartagFlowLogState {
    activeAging?: pulumi.Input<number>;
    description?: pulumi.Input<string>;
    flowLogName?: pulumi.Input<string>;
    inactiveAging?: pulumi.Input<number>;
    logstoreName?: pulumi.Input<string>;
    netflowServerIp?: pulumi.Input<string>;
    netflowServerPort?: pulumi.Input<number>;
    netflowVersion?: pulumi.Input<string>;
    outputType?: pulumi.Input<string>;
    projectName?: pulumi.Input<string>;
    slsRegionId?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.SmartagFlowLogTimeouts>;
}

/**
 * The set of arguments for constructing a SmartagFlowLog resource.
 */
export interface SmartagFlowLogArgs {
    activeAging?: pulumi.Input<number>;
    description?: pulumi.Input<string>;
    flowLogName?: pulumi.Input<string>;
    inactiveAging?: pulumi.Input<number>;
    logstoreName?: pulumi.Input<string>;
    netflowServerIp?: pulumi.Input<string>;
    netflowServerPort?: pulumi.Input<number>;
    netflowVersion?: pulumi.Input<string>;
    outputType: pulumi.Input<string>;
    projectName?: pulumi.Input<string>;
    slsRegionId?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.SmartagFlowLogTimeouts>;
}
