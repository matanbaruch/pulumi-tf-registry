// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Dnssoarec extends pulumi.CustomResource {
    /**
     * Get an existing Dnssoarec resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DnssoarecState, opts?: pulumi.CustomResourceOptions): Dnssoarec {
        return new Dnssoarec(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'citrixadc:index/dnssoarec:Dnssoarec';

    /**
     * Returns true if the given object is an instance of Dnssoarec.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Dnssoarec {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Dnssoarec.__pulumiType;
    }

    public readonly contact!: pulumi.Output<string>;
    public readonly domain!: pulumi.Output<string>;
    public readonly ecssubnet!: pulumi.Output<string>;
    public readonly expire!: pulumi.Output<number>;
    public readonly minimum!: pulumi.Output<number>;
    public readonly nodeid!: pulumi.Output<number>;
    public readonly originserver!: pulumi.Output<string>;
    public readonly refresh!: pulumi.Output<number>;
    public readonly retry!: pulumi.Output<number>;
    public readonly serial!: pulumi.Output<number>;
    public readonly ttl!: pulumi.Output<number>;
    public readonly type!: pulumi.Output<string>;

    /**
     * Create a Dnssoarec resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DnssoarecArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DnssoarecArgs | DnssoarecState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DnssoarecState | undefined;
            resourceInputs["contact"] = state ? state.contact : undefined;
            resourceInputs["domain"] = state ? state.domain : undefined;
            resourceInputs["ecssubnet"] = state ? state.ecssubnet : undefined;
            resourceInputs["expire"] = state ? state.expire : undefined;
            resourceInputs["minimum"] = state ? state.minimum : undefined;
            resourceInputs["nodeid"] = state ? state.nodeid : undefined;
            resourceInputs["originserver"] = state ? state.originserver : undefined;
            resourceInputs["refresh"] = state ? state.refresh : undefined;
            resourceInputs["retry"] = state ? state.retry : undefined;
            resourceInputs["serial"] = state ? state.serial : undefined;
            resourceInputs["ttl"] = state ? state.ttl : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as DnssoarecArgs | undefined;
            if ((!args || args.domain === undefined) && !opts.urn) {
                throw new Error("Missing required property 'domain'");
            }
            resourceInputs["contact"] = args ? args.contact : undefined;
            resourceInputs["domain"] = args ? args.domain : undefined;
            resourceInputs["ecssubnet"] = args ? args.ecssubnet : undefined;
            resourceInputs["expire"] = args ? args.expire : undefined;
            resourceInputs["minimum"] = args ? args.minimum : undefined;
            resourceInputs["nodeid"] = args ? args.nodeid : undefined;
            resourceInputs["originserver"] = args ? args.originserver : undefined;
            resourceInputs["refresh"] = args ? args.refresh : undefined;
            resourceInputs["retry"] = args ? args.retry : undefined;
            resourceInputs["serial"] = args ? args.serial : undefined;
            resourceInputs["ttl"] = args ? args.ttl : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Dnssoarec.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Dnssoarec resources.
 */
export interface DnssoarecState {
    contact?: pulumi.Input<string>;
    domain?: pulumi.Input<string>;
    ecssubnet?: pulumi.Input<string>;
    expire?: pulumi.Input<number>;
    minimum?: pulumi.Input<number>;
    nodeid?: pulumi.Input<number>;
    originserver?: pulumi.Input<string>;
    refresh?: pulumi.Input<number>;
    retry?: pulumi.Input<number>;
    serial?: pulumi.Input<number>;
    ttl?: pulumi.Input<number>;
    type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Dnssoarec resource.
 */
export interface DnssoarecArgs {
    contact?: pulumi.Input<string>;
    domain: pulumi.Input<string>;
    ecssubnet?: pulumi.Input<string>;
    expire?: pulumi.Input<number>;
    minimum?: pulumi.Input<number>;
    nodeid?: pulumi.Input<number>;
    originserver?: pulumi.Input<string>;
    refresh?: pulumi.Input<number>;
    retry?: pulumi.Input<number>;
    serial?: pulumi.Input<number>;
    ttl?: pulumi.Input<number>;
    type?: pulumi.Input<string>;
}
