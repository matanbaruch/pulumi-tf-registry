// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class TeamsList extends pulumi.CustomResource {
    /**
     * Get an existing TeamsList resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TeamsListState, opts?: pulumi.CustomResourceOptions): TeamsList {
        return new TeamsList(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'cloudflare:index/teamsList:TeamsList';

    /**
     * Returns true if the given object is an instance of TeamsList.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TeamsList {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === TeamsList.__pulumiType;
    }

    /**
     * The account identifier to target for the resource.
     */
    public readonly accountId!: pulumi.Output<string>;
    /**
     * The description of the teams list.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The items of the teams list.
     */
    public readonly items!: pulumi.Output<string[] | undefined>;
    /**
     * The items of the teams list that has explicit description.
     */
    public readonly itemsWithDescriptions!: pulumi.Output<outputs.TeamsListItemsWithDescription[] | undefined>;
    /**
     * Name of the teams list.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The teams list type. Available values: `IP`, `SERIAL`, `URL`, `DOMAIN`, `EMAIL`.
     */
    public readonly type!: pulumi.Output<string>;

    /**
     * Create a TeamsList resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TeamsListArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: TeamsListArgs | TeamsListState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as TeamsListState | undefined;
            resourceInputs["accountId"] = state ? state.accountId : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["items"] = state ? state.items : undefined;
            resourceInputs["itemsWithDescriptions"] = state ? state.itemsWithDescriptions : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as TeamsListArgs | undefined;
            if ((!args || args.accountId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountId'");
            }
            if ((!args || args.type === undefined) && !opts.urn) {
                throw new Error("Missing required property 'type'");
            }
            resourceInputs["accountId"] = args ? args.accountId : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["items"] = args ? args.items : undefined;
            resourceInputs["itemsWithDescriptions"] = args ? args.itemsWithDescriptions : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(TeamsList.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering TeamsList resources.
 */
export interface TeamsListState {
    /**
     * The account identifier to target for the resource.
     */
    accountId?: pulumi.Input<string>;
    /**
     * The description of the teams list.
     */
    description?: pulumi.Input<string>;
    /**
     * The items of the teams list.
     */
    items?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The items of the teams list that has explicit description.
     */
    itemsWithDescriptions?: pulumi.Input<pulumi.Input<inputs.TeamsListItemsWithDescription>[]>;
    /**
     * Name of the teams list.
     */
    name?: pulumi.Input<string>;
    /**
     * The teams list type. Available values: `IP`, `SERIAL`, `URL`, `DOMAIN`, `EMAIL`.
     */
    type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a TeamsList resource.
 */
export interface TeamsListArgs {
    /**
     * The account identifier to target for the resource.
     */
    accountId: pulumi.Input<string>;
    /**
     * The description of the teams list.
     */
    description?: pulumi.Input<string>;
    /**
     * The items of the teams list.
     */
    items?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The items of the teams list that has explicit description.
     */
    itemsWithDescriptions?: pulumi.Input<pulumi.Input<inputs.TeamsListItemsWithDescription>[]>;
    /**
     * Name of the teams list.
     */
    name?: pulumi.Input<string>;
    /**
     * The teams list type. Available values: `IP`, `SERIAL`, `URL`, `DOMAIN`, `EMAIL`.
     */
    type: pulumi.Input<string>;
}
