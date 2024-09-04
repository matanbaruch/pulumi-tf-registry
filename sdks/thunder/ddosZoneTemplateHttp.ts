// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DdosZoneTemplateHttp extends pulumi.CustomResource {
    /**
     * Get an existing DdosZoneTemplateHttp resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DdosZoneTemplateHttpState, opts?: pulumi.CustomResourceOptions): DdosZoneTemplateHttp {
        return new DdosZoneTemplateHttp(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/ddosZoneTemplateHttp:DdosZoneTemplateHttp';

    /**
     * Returns true if the given object is an instance of DdosZoneTemplateHttp.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DdosZoneTemplateHttp {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DdosZoneTemplateHttp.__pulumiType;
    }

    public readonly challenge!: pulumi.Output<outputs.DdosZoneTemplateHttpChallenge | undefined>;
    public readonly clientSourceIp!: pulumi.Output<outputs.DdosZoneTemplateHttpClientSourceIp | undefined>;
    /**
     * Disable this template
     */
    public readonly disable!: pulumi.Output<number | undefined>;
    /**
     * Do not allow HTTP Connect method (asymmetric mode only)
     */
    public readonly disallowConnectMethod!: pulumi.Output<number | undefined>;
    public readonly dst!: pulumi.Output<outputs.DdosZoneTemplateHttpDst | undefined>;
    public readonly filterLists!: pulumi.Output<outputs.DdosZoneTemplateHttpFilterList[] | undefined>;
    /**
     * DDOS HTTP Template Name
     */
    public readonly httpTmplName!: pulumi.Output<string>;
    public readonly idleTimeout!: pulumi.Output<outputs.DdosZoneTemplateHttpIdleTimeout | undefined>;
    public readonly malformedHttp!: pulumi.Output<outputs.DdosZoneTemplateHttpMalformedHttp | undefined>;
    public readonly mssTimeout!: pulumi.Output<outputs.DdosZoneTemplateHttpMssTimeout | undefined>;
    public readonly multiPuThresholdDistribution!: pulumi.Output<outputs.DdosZoneTemplateHttpMultiPuThresholdDistribution | undefined>;
    /**
     * Bypass non-http traffic instead of dropping
     */
    public readonly nonHttpBypass!: pulumi.Output<number | undefined>;
    /**
     * Set the number of packets for the out-of-order HTTP queue (asym mode only)
     */
    public readonly outOfOrderQueueSize!: pulumi.Output<number | undefined>;
    /**
     * Set the timeout value in seconds for out-of-order queue in HTTP (asym mode only)
     */
    public readonly outOfOrderQueueTimeout!: pulumi.Output<number | undefined>;
    public readonly requestHeader!: pulumi.Output<outputs.DdosZoneTemplateHttpRequestHeader | undefined>;
    public readonly slowRead!: pulumi.Output<outputs.DdosZoneTemplateHttpSlowRead | undefined>;
    public readonly src!: pulumi.Output<outputs.DdosZoneTemplateHttpSrc | undefined>;
    /**
     * Customized tag
     */
    public readonly userTag!: pulumi.Output<string | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a DdosZoneTemplateHttp resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DdosZoneTemplateHttpArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DdosZoneTemplateHttpArgs | DdosZoneTemplateHttpState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DdosZoneTemplateHttpState | undefined;
            resourceInputs["challenge"] = state ? state.challenge : undefined;
            resourceInputs["clientSourceIp"] = state ? state.clientSourceIp : undefined;
            resourceInputs["disable"] = state ? state.disable : undefined;
            resourceInputs["disallowConnectMethod"] = state ? state.disallowConnectMethod : undefined;
            resourceInputs["dst"] = state ? state.dst : undefined;
            resourceInputs["filterLists"] = state ? state.filterLists : undefined;
            resourceInputs["httpTmplName"] = state ? state.httpTmplName : undefined;
            resourceInputs["idleTimeout"] = state ? state.idleTimeout : undefined;
            resourceInputs["malformedHttp"] = state ? state.malformedHttp : undefined;
            resourceInputs["mssTimeout"] = state ? state.mssTimeout : undefined;
            resourceInputs["multiPuThresholdDistribution"] = state ? state.multiPuThresholdDistribution : undefined;
            resourceInputs["nonHttpBypass"] = state ? state.nonHttpBypass : undefined;
            resourceInputs["outOfOrderQueueSize"] = state ? state.outOfOrderQueueSize : undefined;
            resourceInputs["outOfOrderQueueTimeout"] = state ? state.outOfOrderQueueTimeout : undefined;
            resourceInputs["requestHeader"] = state ? state.requestHeader : undefined;
            resourceInputs["slowRead"] = state ? state.slowRead : undefined;
            resourceInputs["src"] = state ? state.src : undefined;
            resourceInputs["userTag"] = state ? state.userTag : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as DdosZoneTemplateHttpArgs | undefined;
            if ((!args || args.httpTmplName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'httpTmplName'");
            }
            resourceInputs["challenge"] = args ? args.challenge : undefined;
            resourceInputs["clientSourceIp"] = args ? args.clientSourceIp : undefined;
            resourceInputs["disable"] = args ? args.disable : undefined;
            resourceInputs["disallowConnectMethod"] = args ? args.disallowConnectMethod : undefined;
            resourceInputs["dst"] = args ? args.dst : undefined;
            resourceInputs["filterLists"] = args ? args.filterLists : undefined;
            resourceInputs["httpTmplName"] = args ? args.httpTmplName : undefined;
            resourceInputs["idleTimeout"] = args ? args.idleTimeout : undefined;
            resourceInputs["malformedHttp"] = args ? args.malformedHttp : undefined;
            resourceInputs["mssTimeout"] = args ? args.mssTimeout : undefined;
            resourceInputs["multiPuThresholdDistribution"] = args ? args.multiPuThresholdDistribution : undefined;
            resourceInputs["nonHttpBypass"] = args ? args.nonHttpBypass : undefined;
            resourceInputs["outOfOrderQueueSize"] = args ? args.outOfOrderQueueSize : undefined;
            resourceInputs["outOfOrderQueueTimeout"] = args ? args.outOfOrderQueueTimeout : undefined;
            resourceInputs["requestHeader"] = args ? args.requestHeader : undefined;
            resourceInputs["slowRead"] = args ? args.slowRead : undefined;
            resourceInputs["src"] = args ? args.src : undefined;
            resourceInputs["userTag"] = args ? args.userTag : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DdosZoneTemplateHttp.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DdosZoneTemplateHttp resources.
 */
export interface DdosZoneTemplateHttpState {
    challenge?: pulumi.Input<inputs.DdosZoneTemplateHttpChallenge>;
    clientSourceIp?: pulumi.Input<inputs.DdosZoneTemplateHttpClientSourceIp>;
    /**
     * Disable this template
     */
    disable?: pulumi.Input<number>;
    /**
     * Do not allow HTTP Connect method (asymmetric mode only)
     */
    disallowConnectMethod?: pulumi.Input<number>;
    dst?: pulumi.Input<inputs.DdosZoneTemplateHttpDst>;
    filterLists?: pulumi.Input<pulumi.Input<inputs.DdosZoneTemplateHttpFilterList>[]>;
    /**
     * DDOS HTTP Template Name
     */
    httpTmplName?: pulumi.Input<string>;
    idleTimeout?: pulumi.Input<inputs.DdosZoneTemplateHttpIdleTimeout>;
    malformedHttp?: pulumi.Input<inputs.DdosZoneTemplateHttpMalformedHttp>;
    mssTimeout?: pulumi.Input<inputs.DdosZoneTemplateHttpMssTimeout>;
    multiPuThresholdDistribution?: pulumi.Input<inputs.DdosZoneTemplateHttpMultiPuThresholdDistribution>;
    /**
     * Bypass non-http traffic instead of dropping
     */
    nonHttpBypass?: pulumi.Input<number>;
    /**
     * Set the number of packets for the out-of-order HTTP queue (asym mode only)
     */
    outOfOrderQueueSize?: pulumi.Input<number>;
    /**
     * Set the timeout value in seconds for out-of-order queue in HTTP (asym mode only)
     */
    outOfOrderQueueTimeout?: pulumi.Input<number>;
    requestHeader?: pulumi.Input<inputs.DdosZoneTemplateHttpRequestHeader>;
    slowRead?: pulumi.Input<inputs.DdosZoneTemplateHttpSlowRead>;
    src?: pulumi.Input<inputs.DdosZoneTemplateHttpSrc>;
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
 * The set of arguments for constructing a DdosZoneTemplateHttp resource.
 */
export interface DdosZoneTemplateHttpArgs {
    challenge?: pulumi.Input<inputs.DdosZoneTemplateHttpChallenge>;
    clientSourceIp?: pulumi.Input<inputs.DdosZoneTemplateHttpClientSourceIp>;
    /**
     * Disable this template
     */
    disable?: pulumi.Input<number>;
    /**
     * Do not allow HTTP Connect method (asymmetric mode only)
     */
    disallowConnectMethod?: pulumi.Input<number>;
    dst?: pulumi.Input<inputs.DdosZoneTemplateHttpDst>;
    filterLists?: pulumi.Input<pulumi.Input<inputs.DdosZoneTemplateHttpFilterList>[]>;
    /**
     * DDOS HTTP Template Name
     */
    httpTmplName: pulumi.Input<string>;
    idleTimeout?: pulumi.Input<inputs.DdosZoneTemplateHttpIdleTimeout>;
    malformedHttp?: pulumi.Input<inputs.DdosZoneTemplateHttpMalformedHttp>;
    mssTimeout?: pulumi.Input<inputs.DdosZoneTemplateHttpMssTimeout>;
    multiPuThresholdDistribution?: pulumi.Input<inputs.DdosZoneTemplateHttpMultiPuThresholdDistribution>;
    /**
     * Bypass non-http traffic instead of dropping
     */
    nonHttpBypass?: pulumi.Input<number>;
    /**
     * Set the number of packets for the out-of-order HTTP queue (asym mode only)
     */
    outOfOrderQueueSize?: pulumi.Input<number>;
    /**
     * Set the timeout value in seconds for out-of-order queue in HTTP (asym mode only)
     */
    outOfOrderQueueTimeout?: pulumi.Input<number>;
    requestHeader?: pulumi.Input<inputs.DdosZoneTemplateHttpRequestHeader>;
    slowRead?: pulumi.Input<inputs.DdosZoneTemplateHttpSlowRead>;
    src?: pulumi.Input<inputs.DdosZoneTemplateHttpSrc>;
    /**
     * Customized tag
     */
    userTag?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
