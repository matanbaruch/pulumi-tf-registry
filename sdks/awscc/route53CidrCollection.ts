// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Route53CidrCollection extends pulumi.CustomResource {
    /**
     * Get an existing Route53CidrCollection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: Route53CidrCollectionState, opts?: pulumi.CustomResourceOptions): Route53CidrCollection {
        return new Route53CidrCollection(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/route53CidrCollection:Route53CidrCollection';

    /**
     * Returns true if the given object is an instance of Route53CidrCollection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Route53CidrCollection {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Route53CidrCollection.__pulumiType;
    }

    /**
     * The Amazon resource name (ARN) to uniquely identify the AWS resource.
     */
    public /*out*/ readonly arn!: pulumi.Output<string>;
    /**
     * UUID of the CIDR collection.
     */
    public /*out*/ readonly cidrCollectionId!: pulumi.Output<string>;
    /**
     * A complex type that contains information about the list of CIDR locations.
     */
    public readonly locations!: pulumi.Output<outputs.Route53CidrCollectionLocation[]>;
    /**
     * A unique name for the CIDR collection.
     */
    public readonly name!: pulumi.Output<string>;

    /**
     * Create a Route53CidrCollection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: Route53CidrCollectionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: Route53CidrCollectionArgs | Route53CidrCollectionState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as Route53CidrCollectionState | undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["cidrCollectionId"] = state ? state.cidrCollectionId : undefined;
            resourceInputs["locations"] = state ? state.locations : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
        } else {
            const args = argsOrState as Route53CidrCollectionArgs | undefined;
            resourceInputs["locations"] = args ? args.locations : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["arn"] = undefined /*out*/;
            resourceInputs["cidrCollectionId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Route53CidrCollection.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Route53CidrCollection resources.
 */
export interface Route53CidrCollectionState {
    /**
     * The Amazon resource name (ARN) to uniquely identify the AWS resource.
     */
    arn?: pulumi.Input<string>;
    /**
     * UUID of the CIDR collection.
     */
    cidrCollectionId?: pulumi.Input<string>;
    /**
     * A complex type that contains information about the list of CIDR locations.
     */
    locations?: pulumi.Input<pulumi.Input<inputs.Route53CidrCollectionLocation>[]>;
    /**
     * A unique name for the CIDR collection.
     */
    name?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Route53CidrCollection resource.
 */
export interface Route53CidrCollectionArgs {
    /**
     * A complex type that contains information about the list of CIDR locations.
     */
    locations?: pulumi.Input<pulumi.Input<inputs.Route53CidrCollectionLocation>[]>;
    /**
     * A unique name for the CIDR collection.
     */
    name?: pulumi.Input<string>;
}
