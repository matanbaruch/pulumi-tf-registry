// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class RdsDbSubnetGroup extends pulumi.CustomResource {
    /**
     * Get an existing RdsDbSubnetGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RdsDbSubnetGroupState, opts?: pulumi.CustomResourceOptions): RdsDbSubnetGroup {
        return new RdsDbSubnetGroup(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/rdsDbSubnetGroup:RdsDbSubnetGroup';

    /**
     * Returns true if the given object is an instance of RdsDbSubnetGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RdsDbSubnetGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RdsDbSubnetGroup.__pulumiType;
    }

    /**
     * The description for the DB subnet group.
     */
    public readonly dbSubnetGroupDescription!: pulumi.Output<string>;
    /**
     * The name for the DB subnet group. This value is stored as a lowercase string. Constraints: + Must contain no more than
     * 255 letters, numbers, periods, underscores, spaces, or hyphens. + Must not be default. + First character must be a
     * letter. Example: ``mydbsubnetgroup``
     */
    public readonly dbSubnetGroupName!: pulumi.Output<string>;
    /**
     * The EC2 Subnet IDs for the DB subnet group.
     */
    public readonly subnetIds!: pulumi.Output<string[]>;
    /**
     * Tags to assign to the DB subnet group.
     */
    public readonly tags!: pulumi.Output<outputs.RdsDbSubnetGroupTag[]>;

    /**
     * Create a RdsDbSubnetGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RdsDbSubnetGroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RdsDbSubnetGroupArgs | RdsDbSubnetGroupState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as RdsDbSubnetGroupState | undefined;
            resourceInputs["dbSubnetGroupDescription"] = state ? state.dbSubnetGroupDescription : undefined;
            resourceInputs["dbSubnetGroupName"] = state ? state.dbSubnetGroupName : undefined;
            resourceInputs["subnetIds"] = state ? state.subnetIds : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as RdsDbSubnetGroupArgs | undefined;
            if ((!args || args.dbSubnetGroupDescription === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dbSubnetGroupDescription'");
            }
            if ((!args || args.subnetIds === undefined) && !opts.urn) {
                throw new Error("Missing required property 'subnetIds'");
            }
            resourceInputs["dbSubnetGroupDescription"] = args ? args.dbSubnetGroupDescription : undefined;
            resourceInputs["dbSubnetGroupName"] = args ? args.dbSubnetGroupName : undefined;
            resourceInputs["subnetIds"] = args ? args.subnetIds : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(RdsDbSubnetGroup.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering RdsDbSubnetGroup resources.
 */
export interface RdsDbSubnetGroupState {
    /**
     * The description for the DB subnet group.
     */
    dbSubnetGroupDescription?: pulumi.Input<string>;
    /**
     * The name for the DB subnet group. This value is stored as a lowercase string. Constraints: + Must contain no more than
     * 255 letters, numbers, periods, underscores, spaces, or hyphens. + Must not be default. + First character must be a
     * letter. Example: ``mydbsubnetgroup``
     */
    dbSubnetGroupName?: pulumi.Input<string>;
    /**
     * The EC2 Subnet IDs for the DB subnet group.
     */
    subnetIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Tags to assign to the DB subnet group.
     */
    tags?: pulumi.Input<pulumi.Input<inputs.RdsDbSubnetGroupTag>[]>;
}

/**
 * The set of arguments for constructing a RdsDbSubnetGroup resource.
 */
export interface RdsDbSubnetGroupArgs {
    /**
     * The description for the DB subnet group.
     */
    dbSubnetGroupDescription: pulumi.Input<string>;
    /**
     * The name for the DB subnet group. This value is stored as a lowercase string. Constraints: + Must contain no more than
     * 255 letters, numbers, periods, underscores, spaces, or hyphens. + Must not be default. + First character must be a
     * letter. Example: ``mydbsubnetgroup``
     */
    dbSubnetGroupName?: pulumi.Input<string>;
    /**
     * The EC2 Subnet IDs for the DB subnet group.
     */
    subnetIds: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Tags to assign to the DB subnet group.
     */
    tags?: pulumi.Input<pulumi.Input<inputs.RdsDbSubnetGroupTag>[]>;
}
