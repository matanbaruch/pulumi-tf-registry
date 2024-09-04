// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class NetworkLoadBalancerV2 extends pulumi.CustomResource {
    /**
     * Get an existing NetworkLoadBalancerV2 resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NetworkLoadBalancerV2State, opts?: pulumi.CustomResourceOptions): NetworkLoadBalancerV2 {
        return new NetworkLoadBalancerV2(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'ecl:index/networkLoadBalancerV2:NetworkLoadBalancerV2';

    /**
     * Returns true if the given object is an instance of NetworkLoadBalancerV2.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NetworkLoadBalancerV2 {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NetworkLoadBalancerV2.__pulumiType;
    }

    public /*out*/ readonly adminPassword!: pulumi.Output<string>;
    public /*out*/ readonly adminUsername!: pulumi.Output<string>;
    public readonly availabilityZone!: pulumi.Output<string | undefined>;
    public readonly defaultGateway!: pulumi.Output<string | undefined>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly interfaces!: pulumi.Output<outputs.NetworkLoadBalancerV2Interface[] | undefined>;
    public readonly loadBalancerPlanId!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public /*out*/ readonly status!: pulumi.Output<string>;
    public readonly syslogServers!: pulumi.Output<outputs.NetworkLoadBalancerV2SyslogServer[] | undefined>;
    public readonly tenantId!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.NetworkLoadBalancerV2Timeouts | undefined>;
    public /*out*/ readonly userPassword!: pulumi.Output<string>;
    public /*out*/ readonly userUsername!: pulumi.Output<string>;

    /**
     * Create a NetworkLoadBalancerV2 resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NetworkLoadBalancerV2Args, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NetworkLoadBalancerV2Args | NetworkLoadBalancerV2State, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NetworkLoadBalancerV2State | undefined;
            resourceInputs["adminPassword"] = state ? state.adminPassword : undefined;
            resourceInputs["adminUsername"] = state ? state.adminUsername : undefined;
            resourceInputs["availabilityZone"] = state ? state.availabilityZone : undefined;
            resourceInputs["defaultGateway"] = state ? state.defaultGateway : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["interfaces"] = state ? state.interfaces : undefined;
            resourceInputs["loadBalancerPlanId"] = state ? state.loadBalancerPlanId : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["syslogServers"] = state ? state.syslogServers : undefined;
            resourceInputs["tenantId"] = state ? state.tenantId : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["userPassword"] = state ? state.userPassword : undefined;
            resourceInputs["userUsername"] = state ? state.userUsername : undefined;
        } else {
            const args = argsOrState as NetworkLoadBalancerV2Args | undefined;
            if ((!args || args.loadBalancerPlanId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'loadBalancerPlanId'");
            }
            resourceInputs["availabilityZone"] = args ? args.availabilityZone : undefined;
            resourceInputs["defaultGateway"] = args ? args.defaultGateway : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["interfaces"] = args ? args.interfaces : undefined;
            resourceInputs["loadBalancerPlanId"] = args ? args.loadBalancerPlanId : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["syslogServers"] = args ? args.syslogServers : undefined;
            resourceInputs["tenantId"] = args ? args.tenantId : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["adminPassword"] = undefined /*out*/;
            resourceInputs["adminUsername"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["userPassword"] = undefined /*out*/;
            resourceInputs["userUsername"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["adminPassword", "userPassword"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(NetworkLoadBalancerV2.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering NetworkLoadBalancerV2 resources.
 */
export interface NetworkLoadBalancerV2State {
    adminPassword?: pulumi.Input<string>;
    adminUsername?: pulumi.Input<string>;
    availabilityZone?: pulumi.Input<string>;
    defaultGateway?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    interfaces?: pulumi.Input<pulumi.Input<inputs.NetworkLoadBalancerV2Interface>[]>;
    loadBalancerPlanId?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    syslogServers?: pulumi.Input<pulumi.Input<inputs.NetworkLoadBalancerV2SyslogServer>[]>;
    tenantId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.NetworkLoadBalancerV2Timeouts>;
    userPassword?: pulumi.Input<string>;
    userUsername?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a NetworkLoadBalancerV2 resource.
 */
export interface NetworkLoadBalancerV2Args {
    availabilityZone?: pulumi.Input<string>;
    defaultGateway?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    interfaces?: pulumi.Input<pulumi.Input<inputs.NetworkLoadBalancerV2Interface>[]>;
    loadBalancerPlanId: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    syslogServers?: pulumi.Input<pulumi.Input<inputs.NetworkLoadBalancerV2SyslogServer>[]>;
    tenantId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.NetworkLoadBalancerV2Timeouts>;
}
