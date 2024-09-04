// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class XraySamplingRule extends pulumi.CustomResource {
    /**
     * Get an existing XraySamplingRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: XraySamplingRuleState, opts?: pulumi.CustomResourceOptions): XraySamplingRule {
        return new XraySamplingRule(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/xraySamplingRule:XraySamplingRule';

    /**
     * Returns true if the given object is an instance of XraySamplingRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is XraySamplingRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === XraySamplingRule.__pulumiType;
    }

    public /*out*/ readonly arn!: pulumi.Output<string>;
    public readonly attributes!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly fixedRate!: pulumi.Output<number>;
    public readonly host!: pulumi.Output<string>;
    public readonly httpMethod!: pulumi.Output<string>;
    public readonly priority!: pulumi.Output<number>;
    public readonly reservoirSize!: pulumi.Output<number>;
    public readonly resourceArn!: pulumi.Output<string>;
    public readonly ruleName!: pulumi.Output<string | undefined>;
    public readonly serviceName!: pulumi.Output<string>;
    public readonly serviceType!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly tagsAll!: pulumi.Output<{[key: string]: string}>;
    public readonly urlPath!: pulumi.Output<string>;
    public readonly version!: pulumi.Output<number>;

    /**
     * Create a XraySamplingRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: XraySamplingRuleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: XraySamplingRuleArgs | XraySamplingRuleState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as XraySamplingRuleState | undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["attributes"] = state ? state.attributes : undefined;
            resourceInputs["fixedRate"] = state ? state.fixedRate : undefined;
            resourceInputs["host"] = state ? state.host : undefined;
            resourceInputs["httpMethod"] = state ? state.httpMethod : undefined;
            resourceInputs["priority"] = state ? state.priority : undefined;
            resourceInputs["reservoirSize"] = state ? state.reservoirSize : undefined;
            resourceInputs["resourceArn"] = state ? state.resourceArn : undefined;
            resourceInputs["ruleName"] = state ? state.ruleName : undefined;
            resourceInputs["serviceName"] = state ? state.serviceName : undefined;
            resourceInputs["serviceType"] = state ? state.serviceType : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["tagsAll"] = state ? state.tagsAll : undefined;
            resourceInputs["urlPath"] = state ? state.urlPath : undefined;
            resourceInputs["version"] = state ? state.version : undefined;
        } else {
            const args = argsOrState as XraySamplingRuleArgs | undefined;
            if ((!args || args.fixedRate === undefined) && !opts.urn) {
                throw new Error("Missing required property 'fixedRate'");
            }
            if ((!args || args.host === undefined) && !opts.urn) {
                throw new Error("Missing required property 'host'");
            }
            if ((!args || args.httpMethod === undefined) && !opts.urn) {
                throw new Error("Missing required property 'httpMethod'");
            }
            if ((!args || args.priority === undefined) && !opts.urn) {
                throw new Error("Missing required property 'priority'");
            }
            if ((!args || args.reservoirSize === undefined) && !opts.urn) {
                throw new Error("Missing required property 'reservoirSize'");
            }
            if ((!args || args.resourceArn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceArn'");
            }
            if ((!args || args.serviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceName'");
            }
            if ((!args || args.serviceType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceType'");
            }
            if ((!args || args.urlPath === undefined) && !opts.urn) {
                throw new Error("Missing required property 'urlPath'");
            }
            if ((!args || args.version === undefined) && !opts.urn) {
                throw new Error("Missing required property 'version'");
            }
            resourceInputs["attributes"] = args ? args.attributes : undefined;
            resourceInputs["fixedRate"] = args ? args.fixedRate : undefined;
            resourceInputs["host"] = args ? args.host : undefined;
            resourceInputs["httpMethod"] = args ? args.httpMethod : undefined;
            resourceInputs["priority"] = args ? args.priority : undefined;
            resourceInputs["reservoirSize"] = args ? args.reservoirSize : undefined;
            resourceInputs["resourceArn"] = args ? args.resourceArn : undefined;
            resourceInputs["ruleName"] = args ? args.ruleName : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["serviceType"] = args ? args.serviceType : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["tagsAll"] = args ? args.tagsAll : undefined;
            resourceInputs["urlPath"] = args ? args.urlPath : undefined;
            resourceInputs["version"] = args ? args.version : undefined;
            resourceInputs["arn"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(XraySamplingRule.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering XraySamplingRule resources.
 */
export interface XraySamplingRuleState {
    arn?: pulumi.Input<string>;
    attributes?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    fixedRate?: pulumi.Input<number>;
    host?: pulumi.Input<string>;
    httpMethod?: pulumi.Input<string>;
    priority?: pulumi.Input<number>;
    reservoirSize?: pulumi.Input<number>;
    resourceArn?: pulumi.Input<string>;
    ruleName?: pulumi.Input<string>;
    serviceName?: pulumi.Input<string>;
    serviceType?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    urlPath?: pulumi.Input<string>;
    version?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a XraySamplingRule resource.
 */
export interface XraySamplingRuleArgs {
    attributes?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    fixedRate: pulumi.Input<number>;
    host: pulumi.Input<string>;
    httpMethod: pulumi.Input<string>;
    priority: pulumi.Input<number>;
    reservoirSize: pulumi.Input<number>;
    resourceArn: pulumi.Input<string>;
    ruleName?: pulumi.Input<string>;
    serviceName: pulumi.Input<string>;
    serviceType: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    urlPath: pulumi.Input<string>;
    version: pulumi.Input<number>;
}
