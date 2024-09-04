// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DbtProject extends pulumi.CustomResource {
    /**
     * Get an existing DbtProject resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DbtProjectState, opts?: pulumi.CustomResourceOptions): DbtProject {
        return new DbtProject(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fivetran:index/dbtProject:DbtProject';

    /**
     * Returns true if the given object is an instance of DbtProject.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DbtProject {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DbtProject.__pulumiType;
    }

    /**
     * The timestamp of the dbt Project creation.
     */
    public /*out*/ readonly createdAt!: pulumi.Output<string>;
    /**
     * The unique identifier for the User within the Fivetran system who created the dbt Project.
     */
    public /*out*/ readonly createdById!: pulumi.Output<string>;
    /**
     * The version of dbt that should run the project. We support the following versions: 0.18.0 - 0.18.2, 0.19.0 - 0.19.2,
     * 0.20.0 - 0.20.2, 0.21.0 - 0.21.1, 1.0.0, 1.0.1, 1.0.3 - 1.0.9, 1.1.0 - 1.1.3, 1.2.0 - 1.2.4, 1.3.0 - 1.3.2, 1.4.1.
     */
    public readonly dbtVersion!: pulumi.Output<string>;
    /**
     * Default schema in destination. This production schema will contain your transformed data.
     */
    public readonly defaultSchema!: pulumi.Output<string>;
    /**
     * Should resource wait for project to finish initialization. Default value: true.
     */
    public readonly ensureReadiness!: pulumi.Output<boolean>;
    /**
     * List of environment variables defined as key-value pairs in the raw string format using = as a separator. The variable
     * name should have the DBT_ prefix and can contain A-Z, 0-9, dash, underscore, or dot characters. Example:
     * "DBT_VARIABLE=variable_value"
     */
    public readonly environmentVars!: pulumi.Output<string[] | undefined>;
    /**
     * The unique identifier for the group within the Fivetran system.
     */
    public readonly groupId!: pulumi.Output<string>;
    public /*out*/ readonly models!: pulumi.Output<outputs.DbtProjectModel[]>;
    public readonly projectConfig!: pulumi.Output<outputs.DbtProjectProjectConfig | undefined>;
    /**
     * Public key to grant Fivetran SSH access to git repository.
     */
    public /*out*/ readonly publicKey!: pulumi.Output<string>;
    /**
     * Status of dbt Project (NOT_READY, READY, ERROR).
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * Target name to set or override the value from the deployment.yaml
     */
    public readonly targetName!: pulumi.Output<string | undefined>;
    /**
     * The number of threads dbt will use (from 1 to 32). Make sure this value is compatible with your destination type. For
     * example, Snowflake supports only 8 concurrent queries on an X-Small warehouse.
     */
    public readonly threads!: pulumi.Output<number>;
    public readonly timeouts!: pulumi.Output<outputs.DbtProjectTimeouts | undefined>;
    /**
     * Type of dbt Project. Currently only `GIT` supported. Empty value will be considered as default (GIT).
     */
    public readonly type!: pulumi.Output<string | undefined>;

    /**
     * Create a DbtProject resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DbtProjectArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DbtProjectArgs | DbtProjectState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DbtProjectState | undefined;
            resourceInputs["createdAt"] = state ? state.createdAt : undefined;
            resourceInputs["createdById"] = state ? state.createdById : undefined;
            resourceInputs["dbtVersion"] = state ? state.dbtVersion : undefined;
            resourceInputs["defaultSchema"] = state ? state.defaultSchema : undefined;
            resourceInputs["ensureReadiness"] = state ? state.ensureReadiness : undefined;
            resourceInputs["environmentVars"] = state ? state.environmentVars : undefined;
            resourceInputs["groupId"] = state ? state.groupId : undefined;
            resourceInputs["models"] = state ? state.models : undefined;
            resourceInputs["projectConfig"] = state ? state.projectConfig : undefined;
            resourceInputs["publicKey"] = state ? state.publicKey : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["targetName"] = state ? state.targetName : undefined;
            resourceInputs["threads"] = state ? state.threads : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as DbtProjectArgs | undefined;
            if ((!args || args.dbtVersion === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dbtVersion'");
            }
            if ((!args || args.defaultSchema === undefined) && !opts.urn) {
                throw new Error("Missing required property 'defaultSchema'");
            }
            if ((!args || args.groupId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'groupId'");
            }
            resourceInputs["dbtVersion"] = args ? args.dbtVersion : undefined;
            resourceInputs["defaultSchema"] = args ? args.defaultSchema : undefined;
            resourceInputs["ensureReadiness"] = args ? args.ensureReadiness : undefined;
            resourceInputs["environmentVars"] = args ? args.environmentVars : undefined;
            resourceInputs["groupId"] = args ? args.groupId : undefined;
            resourceInputs["projectConfig"] = args ? args.projectConfig : undefined;
            resourceInputs["targetName"] = args ? args.targetName : undefined;
            resourceInputs["threads"] = args ? args.threads : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["createdAt"] = undefined /*out*/;
            resourceInputs["createdById"] = undefined /*out*/;
            resourceInputs["models"] = undefined /*out*/;
            resourceInputs["publicKey"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DbtProject.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DbtProject resources.
 */
export interface DbtProjectState {
    /**
     * The timestamp of the dbt Project creation.
     */
    createdAt?: pulumi.Input<string>;
    /**
     * The unique identifier for the User within the Fivetran system who created the dbt Project.
     */
    createdById?: pulumi.Input<string>;
    /**
     * The version of dbt that should run the project. We support the following versions: 0.18.0 - 0.18.2, 0.19.0 - 0.19.2,
     * 0.20.0 - 0.20.2, 0.21.0 - 0.21.1, 1.0.0, 1.0.1, 1.0.3 - 1.0.9, 1.1.0 - 1.1.3, 1.2.0 - 1.2.4, 1.3.0 - 1.3.2, 1.4.1.
     */
    dbtVersion?: pulumi.Input<string>;
    /**
     * Default schema in destination. This production schema will contain your transformed data.
     */
    defaultSchema?: pulumi.Input<string>;
    /**
     * Should resource wait for project to finish initialization. Default value: true.
     */
    ensureReadiness?: pulumi.Input<boolean>;
    /**
     * List of environment variables defined as key-value pairs in the raw string format using = as a separator. The variable
     * name should have the DBT_ prefix and can contain A-Z, 0-9, dash, underscore, or dot characters. Example:
     * "DBT_VARIABLE=variable_value"
     */
    environmentVars?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The unique identifier for the group within the Fivetran system.
     */
    groupId?: pulumi.Input<string>;
    models?: pulumi.Input<pulumi.Input<inputs.DbtProjectModel>[]>;
    projectConfig?: pulumi.Input<inputs.DbtProjectProjectConfig>;
    /**
     * Public key to grant Fivetran SSH access to git repository.
     */
    publicKey?: pulumi.Input<string>;
    /**
     * Status of dbt Project (NOT_READY, READY, ERROR).
     */
    status?: pulumi.Input<string>;
    /**
     * Target name to set or override the value from the deployment.yaml
     */
    targetName?: pulumi.Input<string>;
    /**
     * The number of threads dbt will use (from 1 to 32). Make sure this value is compatible with your destination type. For
     * example, Snowflake supports only 8 concurrent queries on an X-Small warehouse.
     */
    threads?: pulumi.Input<number>;
    timeouts?: pulumi.Input<inputs.DbtProjectTimeouts>;
    /**
     * Type of dbt Project. Currently only `GIT` supported. Empty value will be considered as default (GIT).
     */
    type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DbtProject resource.
 */
export interface DbtProjectArgs {
    /**
     * The version of dbt that should run the project. We support the following versions: 0.18.0 - 0.18.2, 0.19.0 - 0.19.2,
     * 0.20.0 - 0.20.2, 0.21.0 - 0.21.1, 1.0.0, 1.0.1, 1.0.3 - 1.0.9, 1.1.0 - 1.1.3, 1.2.0 - 1.2.4, 1.3.0 - 1.3.2, 1.4.1.
     */
    dbtVersion: pulumi.Input<string>;
    /**
     * Default schema in destination. This production schema will contain your transformed data.
     */
    defaultSchema: pulumi.Input<string>;
    /**
     * Should resource wait for project to finish initialization. Default value: true.
     */
    ensureReadiness?: pulumi.Input<boolean>;
    /**
     * List of environment variables defined as key-value pairs in the raw string format using = as a separator. The variable
     * name should have the DBT_ prefix and can contain A-Z, 0-9, dash, underscore, or dot characters. Example:
     * "DBT_VARIABLE=variable_value"
     */
    environmentVars?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The unique identifier for the group within the Fivetran system.
     */
    groupId: pulumi.Input<string>;
    projectConfig?: pulumi.Input<inputs.DbtProjectProjectConfig>;
    /**
     * Target name to set or override the value from the deployment.yaml
     */
    targetName?: pulumi.Input<string>;
    /**
     * The number of threads dbt will use (from 1 to 32). Make sure this value is compatible with your destination type. For
     * example, Snowflake supports only 8 concurrent queries on an X-Small warehouse.
     */
    threads?: pulumi.Input<number>;
    timeouts?: pulumi.Input<inputs.DbtProjectTimeouts>;
    /**
     * Type of dbt Project. Currently only `GIT` supported. Empty value will be considered as default (GIT).
     */
    type?: pulumi.Input<string>;
}
