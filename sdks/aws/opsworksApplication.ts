// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class OpsworksApplication extends pulumi.CustomResource {
    /**
     * Get an existing OpsworksApplication resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: OpsworksApplicationState, opts?: pulumi.CustomResourceOptions): OpsworksApplication {
        return new OpsworksApplication(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/opsworksApplication:OpsworksApplication';

    /**
     * Returns true if the given object is an instance of OpsworksApplication.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is OpsworksApplication {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === OpsworksApplication.__pulumiType;
    }

    public readonly appSources!: pulumi.Output<outputs.OpsworksApplicationAppSource[] | undefined>;
    public readonly autoBundleOnDeploy!: pulumi.Output<string | undefined>;
    public readonly awsFlowRubySettings!: pulumi.Output<string | undefined>;
    public readonly dataSourceArn!: pulumi.Output<string | undefined>;
    public readonly dataSourceDatabaseName!: pulumi.Output<string | undefined>;
    public readonly dataSourceType!: pulumi.Output<string | undefined>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly documentRoot!: pulumi.Output<string | undefined>;
    public readonly domains!: pulumi.Output<string[] | undefined>;
    public readonly enableSsl!: pulumi.Output<boolean | undefined>;
    public readonly environments!: pulumi.Output<outputs.OpsworksApplicationEnvironment[] | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly railsEnv!: pulumi.Output<string | undefined>;
    public readonly shortName!: pulumi.Output<string>;
    public readonly sslConfigurations!: pulumi.Output<outputs.OpsworksApplicationSslConfiguration[] | undefined>;
    public readonly stackId!: pulumi.Output<string>;
    public readonly type!: pulumi.Output<string>;

    /**
     * Create a OpsworksApplication resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OpsworksApplicationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: OpsworksApplicationArgs | OpsworksApplicationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as OpsworksApplicationState | undefined;
            resourceInputs["appSources"] = state ? state.appSources : undefined;
            resourceInputs["autoBundleOnDeploy"] = state ? state.autoBundleOnDeploy : undefined;
            resourceInputs["awsFlowRubySettings"] = state ? state.awsFlowRubySettings : undefined;
            resourceInputs["dataSourceArn"] = state ? state.dataSourceArn : undefined;
            resourceInputs["dataSourceDatabaseName"] = state ? state.dataSourceDatabaseName : undefined;
            resourceInputs["dataSourceType"] = state ? state.dataSourceType : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["documentRoot"] = state ? state.documentRoot : undefined;
            resourceInputs["domains"] = state ? state.domains : undefined;
            resourceInputs["enableSsl"] = state ? state.enableSsl : undefined;
            resourceInputs["environments"] = state ? state.environments : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["railsEnv"] = state ? state.railsEnv : undefined;
            resourceInputs["shortName"] = state ? state.shortName : undefined;
            resourceInputs["sslConfigurations"] = state ? state.sslConfigurations : undefined;
            resourceInputs["stackId"] = state ? state.stackId : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as OpsworksApplicationArgs | undefined;
            if ((!args || args.stackId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'stackId'");
            }
            if ((!args || args.type === undefined) && !opts.urn) {
                throw new Error("Missing required property 'type'");
            }
            resourceInputs["appSources"] = args ? args.appSources : undefined;
            resourceInputs["autoBundleOnDeploy"] = args ? args.autoBundleOnDeploy : undefined;
            resourceInputs["awsFlowRubySettings"] = args ? args.awsFlowRubySettings : undefined;
            resourceInputs["dataSourceArn"] = args ? args.dataSourceArn : undefined;
            resourceInputs["dataSourceDatabaseName"] = args ? args.dataSourceDatabaseName : undefined;
            resourceInputs["dataSourceType"] = args ? args.dataSourceType : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["documentRoot"] = args ? args.documentRoot : undefined;
            resourceInputs["domains"] = args ? args.domains : undefined;
            resourceInputs["enableSsl"] = args ? args.enableSsl : undefined;
            resourceInputs["environments"] = args ? args.environments : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["railsEnv"] = args ? args.railsEnv : undefined;
            resourceInputs["shortName"] = args ? args.shortName : undefined;
            resourceInputs["sslConfigurations"] = args ? args.sslConfigurations : undefined;
            resourceInputs["stackId"] = args ? args.stackId : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(OpsworksApplication.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering OpsworksApplication resources.
 */
export interface OpsworksApplicationState {
    appSources?: pulumi.Input<pulumi.Input<inputs.OpsworksApplicationAppSource>[]>;
    autoBundleOnDeploy?: pulumi.Input<string>;
    awsFlowRubySettings?: pulumi.Input<string>;
    dataSourceArn?: pulumi.Input<string>;
    dataSourceDatabaseName?: pulumi.Input<string>;
    dataSourceType?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    documentRoot?: pulumi.Input<string>;
    domains?: pulumi.Input<pulumi.Input<string>[]>;
    enableSsl?: pulumi.Input<boolean>;
    environments?: pulumi.Input<pulumi.Input<inputs.OpsworksApplicationEnvironment>[]>;
    name?: pulumi.Input<string>;
    railsEnv?: pulumi.Input<string>;
    shortName?: pulumi.Input<string>;
    sslConfigurations?: pulumi.Input<pulumi.Input<inputs.OpsworksApplicationSslConfiguration>[]>;
    stackId?: pulumi.Input<string>;
    type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a OpsworksApplication resource.
 */
export interface OpsworksApplicationArgs {
    appSources?: pulumi.Input<pulumi.Input<inputs.OpsworksApplicationAppSource>[]>;
    autoBundleOnDeploy?: pulumi.Input<string>;
    awsFlowRubySettings?: pulumi.Input<string>;
    dataSourceArn?: pulumi.Input<string>;
    dataSourceDatabaseName?: pulumi.Input<string>;
    dataSourceType?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    documentRoot?: pulumi.Input<string>;
    domains?: pulumi.Input<pulumi.Input<string>[]>;
    enableSsl?: pulumi.Input<boolean>;
    environments?: pulumi.Input<pulumi.Input<inputs.OpsworksApplicationEnvironment>[]>;
    name?: pulumi.Input<string>;
    railsEnv?: pulumi.Input<string>;
    shortName?: pulumi.Input<string>;
    sslConfigurations?: pulumi.Input<pulumi.Input<inputs.OpsworksApplicationSslConfiguration>[]>;
    stackId: pulumi.Input<string>;
    type: pulumi.Input<string>;
}
