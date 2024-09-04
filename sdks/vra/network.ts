// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Network extends pulumi.CustomResource {
    /**
     * Get an existing Network resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NetworkState, opts?: pulumi.CustomResourceOptions): Network {
        return new Network(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'vra:index/network:Network';

    /**
     * Returns true if the given object is an instance of Network.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Network {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Network.__pulumiType;
    }

    public /*out*/ readonly cidr!: pulumi.Output<string>;
    /**
     * Constraints that are used to drive placement policies for entities such as image, network, storage, etc. Constraint
     * expressions are matched against tags on existing placement targets.
     */
    public readonly constraints!: pulumi.Output<outputs.NetworkConstraint[] | undefined>;
    public readonly customProperties!: pulumi.Output<{[key: string]: string}>;
    public readonly deploymentId!: pulumi.Output<string>;
    public readonly description!: pulumi.Output<string | undefined>;
    public /*out*/ readonly externalId!: pulumi.Output<string>;
    public /*out*/ readonly externalZoneId!: pulumi.Output<string>;
    public /*out*/ readonly links!: pulumi.Output<outputs.NetworkLink[]>;
    public readonly name!: pulumi.Output<string>;
    public /*out*/ readonly organizationId!: pulumi.Output<string>;
    public readonly outboundAccess!: pulumi.Output<boolean | undefined>;
    public /*out*/ readonly owner!: pulumi.Output<string>;
    public readonly projectId!: pulumi.Output<string>;
    public /*out*/ readonly selfLink!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<outputs.NetworkTag[] | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.NetworkTimeouts | undefined>;
    public /*out*/ readonly updatedAt!: pulumi.Output<string>;

    /**
     * Create a Network resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NetworkArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NetworkArgs | NetworkState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NetworkState | undefined;
            resourceInputs["cidr"] = state ? state.cidr : undefined;
            resourceInputs["constraints"] = state ? state.constraints : undefined;
            resourceInputs["customProperties"] = state ? state.customProperties : undefined;
            resourceInputs["deploymentId"] = state ? state.deploymentId : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["externalId"] = state ? state.externalId : undefined;
            resourceInputs["externalZoneId"] = state ? state.externalZoneId : undefined;
            resourceInputs["links"] = state ? state.links : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["organizationId"] = state ? state.organizationId : undefined;
            resourceInputs["outboundAccess"] = state ? state.outboundAccess : undefined;
            resourceInputs["owner"] = state ? state.owner : undefined;
            resourceInputs["projectId"] = state ? state.projectId : undefined;
            resourceInputs["selfLink"] = state ? state.selfLink : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["updatedAt"] = state ? state.updatedAt : undefined;
        } else {
            const args = argsOrState as NetworkArgs | undefined;
            if ((!args || args.projectId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'projectId'");
            }
            resourceInputs["constraints"] = args ? args.constraints : undefined;
            resourceInputs["customProperties"] = args ? args.customProperties : undefined;
            resourceInputs["deploymentId"] = args ? args.deploymentId : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["outboundAccess"] = args ? args.outboundAccess : undefined;
            resourceInputs["projectId"] = args ? args.projectId : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["cidr"] = undefined /*out*/;
            resourceInputs["externalId"] = undefined /*out*/;
            resourceInputs["externalZoneId"] = undefined /*out*/;
            resourceInputs["links"] = undefined /*out*/;
            resourceInputs["organizationId"] = undefined /*out*/;
            resourceInputs["owner"] = undefined /*out*/;
            resourceInputs["selfLink"] = undefined /*out*/;
            resourceInputs["updatedAt"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Network.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Network resources.
 */
export interface NetworkState {
    cidr?: pulumi.Input<string>;
    /**
     * Constraints that are used to drive placement policies for entities such as image, network, storage, etc. Constraint
     * expressions are matched against tags on existing placement targets.
     */
    constraints?: pulumi.Input<pulumi.Input<inputs.NetworkConstraint>[]>;
    customProperties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    deploymentId?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    externalId?: pulumi.Input<string>;
    externalZoneId?: pulumi.Input<string>;
    links?: pulumi.Input<pulumi.Input<inputs.NetworkLink>[]>;
    name?: pulumi.Input<string>;
    organizationId?: pulumi.Input<string>;
    outboundAccess?: pulumi.Input<boolean>;
    owner?: pulumi.Input<string>;
    projectId?: pulumi.Input<string>;
    selfLink?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.NetworkTag>[]>;
    timeouts?: pulumi.Input<inputs.NetworkTimeouts>;
    updatedAt?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Network resource.
 */
export interface NetworkArgs {
    /**
     * Constraints that are used to drive placement policies for entities such as image, network, storage, etc. Constraint
     * expressions are matched against tags on existing placement targets.
     */
    constraints?: pulumi.Input<pulumi.Input<inputs.NetworkConstraint>[]>;
    customProperties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    deploymentId?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    outboundAccess?: pulumi.Input<boolean>;
    projectId: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.NetworkTag>[]>;
    timeouts?: pulumi.Input<inputs.NetworkTimeouts>;
}
