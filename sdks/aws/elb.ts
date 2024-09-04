// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Elb extends pulumi.CustomResource {
    /**
     * Get an existing Elb resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ElbState, opts?: pulumi.CustomResourceOptions): Elb {
        return new Elb(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/elb:Elb';

    /**
     * Returns true if the given object is an instance of Elb.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Elb {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Elb.__pulumiType;
    }

    public readonly accessLogs!: pulumi.Output<outputs.ElbAccessLogs | undefined>;
    public /*out*/ readonly arn!: pulumi.Output<string>;
    public readonly availabilityZones!: pulumi.Output<string[]>;
    public readonly connectionDraining!: pulumi.Output<boolean | undefined>;
    public readonly connectionDrainingTimeout!: pulumi.Output<number | undefined>;
    public readonly crossZoneLoadBalancing!: pulumi.Output<boolean | undefined>;
    public readonly desyncMitigationMode!: pulumi.Output<string | undefined>;
    public /*out*/ readonly dnsName!: pulumi.Output<string>;
    public readonly healthCheck!: pulumi.Output<outputs.ElbHealthCheck | undefined>;
    public readonly idleTimeout!: pulumi.Output<number | undefined>;
    public readonly instances!: pulumi.Output<string[]>;
    public readonly internal!: pulumi.Output<boolean>;
    public readonly listeners!: pulumi.Output<outputs.ElbListener[]>;
    public readonly name!: pulumi.Output<string>;
    public readonly namePrefix!: pulumi.Output<string>;
    public readonly securityGroups!: pulumi.Output<string[]>;
    public readonly sourceSecurityGroup!: pulumi.Output<string>;
    public /*out*/ readonly sourceSecurityGroupId!: pulumi.Output<string>;
    public readonly subnets!: pulumi.Output<string[]>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly tagsAll!: pulumi.Output<{[key: string]: string}>;
    public readonly timeouts!: pulumi.Output<outputs.ElbTimeouts | undefined>;
    public /*out*/ readonly zoneId!: pulumi.Output<string>;

    /**
     * Create a Elb resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ElbArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ElbArgs | ElbState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ElbState | undefined;
            resourceInputs["accessLogs"] = state ? state.accessLogs : undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["availabilityZones"] = state ? state.availabilityZones : undefined;
            resourceInputs["connectionDraining"] = state ? state.connectionDraining : undefined;
            resourceInputs["connectionDrainingTimeout"] = state ? state.connectionDrainingTimeout : undefined;
            resourceInputs["crossZoneLoadBalancing"] = state ? state.crossZoneLoadBalancing : undefined;
            resourceInputs["desyncMitigationMode"] = state ? state.desyncMitigationMode : undefined;
            resourceInputs["dnsName"] = state ? state.dnsName : undefined;
            resourceInputs["healthCheck"] = state ? state.healthCheck : undefined;
            resourceInputs["idleTimeout"] = state ? state.idleTimeout : undefined;
            resourceInputs["instances"] = state ? state.instances : undefined;
            resourceInputs["internal"] = state ? state.internal : undefined;
            resourceInputs["listeners"] = state ? state.listeners : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["namePrefix"] = state ? state.namePrefix : undefined;
            resourceInputs["securityGroups"] = state ? state.securityGroups : undefined;
            resourceInputs["sourceSecurityGroup"] = state ? state.sourceSecurityGroup : undefined;
            resourceInputs["sourceSecurityGroupId"] = state ? state.sourceSecurityGroupId : undefined;
            resourceInputs["subnets"] = state ? state.subnets : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["tagsAll"] = state ? state.tagsAll : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["zoneId"] = state ? state.zoneId : undefined;
        } else {
            const args = argsOrState as ElbArgs | undefined;
            if ((!args || args.listeners === undefined) && !opts.urn) {
                throw new Error("Missing required property 'listeners'");
            }
            resourceInputs["accessLogs"] = args ? args.accessLogs : undefined;
            resourceInputs["availabilityZones"] = args ? args.availabilityZones : undefined;
            resourceInputs["connectionDraining"] = args ? args.connectionDraining : undefined;
            resourceInputs["connectionDrainingTimeout"] = args ? args.connectionDrainingTimeout : undefined;
            resourceInputs["crossZoneLoadBalancing"] = args ? args.crossZoneLoadBalancing : undefined;
            resourceInputs["desyncMitigationMode"] = args ? args.desyncMitigationMode : undefined;
            resourceInputs["healthCheck"] = args ? args.healthCheck : undefined;
            resourceInputs["idleTimeout"] = args ? args.idleTimeout : undefined;
            resourceInputs["instances"] = args ? args.instances : undefined;
            resourceInputs["internal"] = args ? args.internal : undefined;
            resourceInputs["listeners"] = args ? args.listeners : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["namePrefix"] = args ? args.namePrefix : undefined;
            resourceInputs["securityGroups"] = args ? args.securityGroups : undefined;
            resourceInputs["sourceSecurityGroup"] = args ? args.sourceSecurityGroup : undefined;
            resourceInputs["subnets"] = args ? args.subnets : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["tagsAll"] = args ? args.tagsAll : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["arn"] = undefined /*out*/;
            resourceInputs["dnsName"] = undefined /*out*/;
            resourceInputs["sourceSecurityGroupId"] = undefined /*out*/;
            resourceInputs["zoneId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Elb.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Elb resources.
 */
export interface ElbState {
    accessLogs?: pulumi.Input<inputs.ElbAccessLogs>;
    arn?: pulumi.Input<string>;
    availabilityZones?: pulumi.Input<pulumi.Input<string>[]>;
    connectionDraining?: pulumi.Input<boolean>;
    connectionDrainingTimeout?: pulumi.Input<number>;
    crossZoneLoadBalancing?: pulumi.Input<boolean>;
    desyncMitigationMode?: pulumi.Input<string>;
    dnsName?: pulumi.Input<string>;
    healthCheck?: pulumi.Input<inputs.ElbHealthCheck>;
    idleTimeout?: pulumi.Input<number>;
    instances?: pulumi.Input<pulumi.Input<string>[]>;
    internal?: pulumi.Input<boolean>;
    listeners?: pulumi.Input<pulumi.Input<inputs.ElbListener>[]>;
    name?: pulumi.Input<string>;
    namePrefix?: pulumi.Input<string>;
    securityGroups?: pulumi.Input<pulumi.Input<string>[]>;
    sourceSecurityGroup?: pulumi.Input<string>;
    sourceSecurityGroupId?: pulumi.Input<string>;
    subnets?: pulumi.Input<pulumi.Input<string>[]>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.ElbTimeouts>;
    zoneId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Elb resource.
 */
export interface ElbArgs {
    accessLogs?: pulumi.Input<inputs.ElbAccessLogs>;
    availabilityZones?: pulumi.Input<pulumi.Input<string>[]>;
    connectionDraining?: pulumi.Input<boolean>;
    connectionDrainingTimeout?: pulumi.Input<number>;
    crossZoneLoadBalancing?: pulumi.Input<boolean>;
    desyncMitigationMode?: pulumi.Input<string>;
    healthCheck?: pulumi.Input<inputs.ElbHealthCheck>;
    idleTimeout?: pulumi.Input<number>;
    instances?: pulumi.Input<pulumi.Input<string>[]>;
    internal?: pulumi.Input<boolean>;
    listeners: pulumi.Input<pulumi.Input<inputs.ElbListener>[]>;
    name?: pulumi.Input<string>;
    namePrefix?: pulumi.Input<string>;
    securityGroups?: pulumi.Input<pulumi.Input<string>[]>;
    sourceSecurityGroup?: pulumi.Input<string>;
    subnets?: pulumi.Input<pulumi.Input<string>[]>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.ElbTimeouts>;
}
