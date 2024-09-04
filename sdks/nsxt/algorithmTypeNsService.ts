// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class AlgorithmTypeNsService extends pulumi.CustomResource {
    /**
     * Get an existing AlgorithmTypeNsService resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AlgorithmTypeNsServiceState, opts?: pulumi.CustomResourceOptions): AlgorithmTypeNsService {
        return new AlgorithmTypeNsService(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'nsxt:index/algorithmTypeNsService:AlgorithmTypeNsService';

    /**
     * Returns true if the given object is an instance of AlgorithmTypeNsService.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AlgorithmTypeNsService {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AlgorithmTypeNsService.__pulumiType;
    }

    /**
     * Algorithm
     */
    public readonly algorithm!: pulumi.Output<string>;
    /**
     * A boolean flag which reflects whether this is a default NSServices which can't be modified/deleted
     */
    public /*out*/ readonly defaultService!: pulumi.Output<boolean>;
    /**
     * Description of this resource
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * A single destination port
     */
    public readonly destinationPort!: pulumi.Output<string>;
    /**
     * The display name of this resource. Defaults to ID if not set
     */
    public readonly displayName!: pulumi.Output<string>;
    /**
     * The _revision property describes the current revision of the resource. To prevent clients from overwriting each other's
     * changes, PUT operations must include the current _revision of the resource, which clients should obtain by issuing a GET
     * operation. If the _revision provided in a PUT request is missing or stale, the operation will be rejected
     */
    public /*out*/ readonly revision!: pulumi.Output<number>;
    /**
     * Set of source ports or ranges
     */
    public readonly sourcePorts!: pulumi.Output<string[] | undefined>;
    /**
     * Set of opaque identifiers meaningful to the user
     */
    public readonly tags!: pulumi.Output<outputs.AlgorithmTypeNsServiceTag[] | undefined>;

    /**
     * Create a AlgorithmTypeNsService resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AlgorithmTypeNsServiceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AlgorithmTypeNsServiceArgs | AlgorithmTypeNsServiceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AlgorithmTypeNsServiceState | undefined;
            resourceInputs["algorithm"] = state ? state.algorithm : undefined;
            resourceInputs["defaultService"] = state ? state.defaultService : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["destinationPort"] = state ? state.destinationPort : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["revision"] = state ? state.revision : undefined;
            resourceInputs["sourcePorts"] = state ? state.sourcePorts : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as AlgorithmTypeNsServiceArgs | undefined;
            if ((!args || args.algorithm === undefined) && !opts.urn) {
                throw new Error("Missing required property 'algorithm'");
            }
            if ((!args || args.destinationPort === undefined) && !opts.urn) {
                throw new Error("Missing required property 'destinationPort'");
            }
            resourceInputs["algorithm"] = args ? args.algorithm : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["destinationPort"] = args ? args.destinationPort : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["sourcePorts"] = args ? args.sourcePorts : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["defaultService"] = undefined /*out*/;
            resourceInputs["revision"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AlgorithmTypeNsService.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AlgorithmTypeNsService resources.
 */
export interface AlgorithmTypeNsServiceState {
    /**
     * Algorithm
     */
    algorithm?: pulumi.Input<string>;
    /**
     * A boolean flag which reflects whether this is a default NSServices which can't be modified/deleted
     */
    defaultService?: pulumi.Input<boolean>;
    /**
     * Description of this resource
     */
    description?: pulumi.Input<string>;
    /**
     * A single destination port
     */
    destinationPort?: pulumi.Input<string>;
    /**
     * The display name of this resource. Defaults to ID if not set
     */
    displayName?: pulumi.Input<string>;
    /**
     * The _revision property describes the current revision of the resource. To prevent clients from overwriting each other's
     * changes, PUT operations must include the current _revision of the resource, which clients should obtain by issuing a GET
     * operation. If the _revision provided in a PUT request is missing or stale, the operation will be rejected
     */
    revision?: pulumi.Input<number>;
    /**
     * Set of source ports or ranges
     */
    sourcePorts?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Set of opaque identifiers meaningful to the user
     */
    tags?: pulumi.Input<pulumi.Input<inputs.AlgorithmTypeNsServiceTag>[]>;
}

/**
 * The set of arguments for constructing a AlgorithmTypeNsService resource.
 */
export interface AlgorithmTypeNsServiceArgs {
    /**
     * Algorithm
     */
    algorithm: pulumi.Input<string>;
    /**
     * Description of this resource
     */
    description?: pulumi.Input<string>;
    /**
     * A single destination port
     */
    destinationPort: pulumi.Input<string>;
    /**
     * The display name of this resource. Defaults to ID if not set
     */
    displayName?: pulumi.Input<string>;
    /**
     * Set of source ports or ranges
     */
    sourcePorts?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Set of opaque identifiers meaningful to the user
     */
    tags?: pulumi.Input<pulumi.Input<inputs.AlgorithmTypeNsServiceTag>[]>;
}
