// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class PostgresqlConfiguration extends pulumi.CustomResource {
    /**
     * Get an existing PostgresqlConfiguration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PostgresqlConfigurationState, opts?: pulumi.CustomResourceOptions): PostgresqlConfiguration {
        return new PostgresqlConfiguration(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/postgresqlConfiguration:PostgresqlConfiguration';

    /**
     * Returns true if the given object is an instance of PostgresqlConfiguration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PostgresqlConfiguration {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PostgresqlConfiguration.__pulumiType;
    }

    public readonly name!: pulumi.Output<string>;
    public readonly resourceGroupName!: pulumi.Output<string>;
    public readonly serverName!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.PostgresqlConfigurationTimeouts | undefined>;
    public readonly value!: pulumi.Output<string>;

    /**
     * Create a PostgresqlConfiguration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PostgresqlConfigurationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PostgresqlConfigurationArgs | PostgresqlConfigurationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PostgresqlConfigurationState | undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            resourceInputs["serverName"] = state ? state.serverName : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["value"] = state ? state.value : undefined;
        } else {
            const args = argsOrState as PostgresqlConfigurationArgs | undefined;
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serverName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serverName'");
            }
            if ((!args || args.value === undefined) && !opts.urn) {
                throw new Error("Missing required property 'value'");
            }
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serverName"] = args ? args.serverName : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["value"] = args ? args.value : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(PostgresqlConfiguration.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering PostgresqlConfiguration resources.
 */
export interface PostgresqlConfigurationState {
    name?: pulumi.Input<string>;
    resourceGroupName?: pulumi.Input<string>;
    serverName?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.PostgresqlConfigurationTimeouts>;
    value?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a PostgresqlConfiguration resource.
 */
export interface PostgresqlConfigurationArgs {
    name?: pulumi.Input<string>;
    resourceGroupName: pulumi.Input<string>;
    serverName: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.PostgresqlConfigurationTimeouts>;
    value: pulumi.Input<string>;
}
