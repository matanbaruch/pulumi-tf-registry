// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ComputeInstanceGroupNamedPort extends pulumi.CustomResource {
    /**
     * Get an existing ComputeInstanceGroupNamedPort resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ComputeInstanceGroupNamedPortState, opts?: pulumi.CustomResourceOptions): ComputeInstanceGroupNamedPort {
        return new ComputeInstanceGroupNamedPort(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google:index/computeInstanceGroupNamedPort:ComputeInstanceGroupNamedPort';

    /**
     * Returns true if the given object is an instance of ComputeInstanceGroupNamedPort.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ComputeInstanceGroupNamedPort {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ComputeInstanceGroupNamedPort.__pulumiType;
    }

    /**
     * The name of the instance group.
     */
    public readonly group!: pulumi.Output<string>;
    /**
     * The name for this named port. The name must be 1-63 characters long, and comply with RFC1035.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The port number, which can be a value between 1 and 65535.
     */
    public readonly port!: pulumi.Output<number>;
    public readonly project!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.ComputeInstanceGroupNamedPortTimeouts | undefined>;
    /**
     * The zone of the instance group.
     */
    public readonly zone!: pulumi.Output<string>;

    /**
     * Create a ComputeInstanceGroupNamedPort resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ComputeInstanceGroupNamedPortArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ComputeInstanceGroupNamedPortArgs | ComputeInstanceGroupNamedPortState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ComputeInstanceGroupNamedPortState | undefined;
            resourceInputs["group"] = state ? state.group : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["port"] = state ? state.port : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["zone"] = state ? state.zone : undefined;
        } else {
            const args = argsOrState as ComputeInstanceGroupNamedPortArgs | undefined;
            if ((!args || args.group === undefined) && !opts.urn) {
                throw new Error("Missing required property 'group'");
            }
            if ((!args || args.port === undefined) && !opts.urn) {
                throw new Error("Missing required property 'port'");
            }
            resourceInputs["group"] = args ? args.group : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["port"] = args ? args.port : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["zone"] = args ? args.zone : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ComputeInstanceGroupNamedPort.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ComputeInstanceGroupNamedPort resources.
 */
export interface ComputeInstanceGroupNamedPortState {
    /**
     * The name of the instance group.
     */
    group?: pulumi.Input<string>;
    /**
     * The name for this named port. The name must be 1-63 characters long, and comply with RFC1035.
     */
    name?: pulumi.Input<string>;
    /**
     * The port number, which can be a value between 1 and 65535.
     */
    port?: pulumi.Input<number>;
    project?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ComputeInstanceGroupNamedPortTimeouts>;
    /**
     * The zone of the instance group.
     */
    zone?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ComputeInstanceGroupNamedPort resource.
 */
export interface ComputeInstanceGroupNamedPortArgs {
    /**
     * The name of the instance group.
     */
    group: pulumi.Input<string>;
    /**
     * The name for this named port. The name must be 1-63 characters long, and comply with RFC1035.
     */
    name?: pulumi.Input<string>;
    /**
     * The port number, which can be a value between 1 and 65535.
     */
    port: pulumi.Input<number>;
    project?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ComputeInstanceGroupNamedPortTimeouts>;
    /**
     * The zone of the instance group.
     */
    zone?: pulumi.Input<string>;
}
