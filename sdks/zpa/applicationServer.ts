// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ApplicationServer extends pulumi.CustomResource {
    /**
     * Get an existing ApplicationServer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ApplicationServerState, opts?: pulumi.CustomResourceOptions): ApplicationServer {
        return new ApplicationServer(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'zpa:index/applicationServer:ApplicationServer';

    /**
     * Returns true if the given object is an instance of ApplicationServer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ApplicationServer {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ApplicationServer.__pulumiType;
    }

    /**
     * This field defines the domain or IP address of the server.
     */
    public readonly address!: pulumi.Output<string>;
    /**
     * This field defines the list of server groups IDs.
     */
    public readonly appServerGroupIds!: pulumi.Output<string[]>;
    public readonly configSpace!: pulumi.Output<string | undefined>;
    /**
     * This field defines the description of the server.
     */
    public readonly description!: pulumi.Output<string>;
    /**
     * This field defines the status of the server.
     */
    public readonly enabled!: pulumi.Output<boolean>;
    public readonly microtenantId!: pulumi.Output<string>;
    /**
     * This field defines the name of the server.
     */
    public readonly name!: pulumi.Output<string>;

    /**
     * Create a ApplicationServer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApplicationServerArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ApplicationServerArgs | ApplicationServerState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ApplicationServerState | undefined;
            resourceInputs["address"] = state ? state.address : undefined;
            resourceInputs["appServerGroupIds"] = state ? state.appServerGroupIds : undefined;
            resourceInputs["configSpace"] = state ? state.configSpace : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["microtenantId"] = state ? state.microtenantId : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
        } else {
            const args = argsOrState as ApplicationServerArgs | undefined;
            if ((!args || args.address === undefined) && !opts.urn) {
                throw new Error("Missing required property 'address'");
            }
            resourceInputs["address"] = args ? args.address : undefined;
            resourceInputs["appServerGroupIds"] = args ? args.appServerGroupIds : undefined;
            resourceInputs["configSpace"] = args ? args.configSpace : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["microtenantId"] = args ? args.microtenantId : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ApplicationServer.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ApplicationServer resources.
 */
export interface ApplicationServerState {
    /**
     * This field defines the domain or IP address of the server.
     */
    address?: pulumi.Input<string>;
    /**
     * This field defines the list of server groups IDs.
     */
    appServerGroupIds?: pulumi.Input<pulumi.Input<string>[]>;
    configSpace?: pulumi.Input<string>;
    /**
     * This field defines the description of the server.
     */
    description?: pulumi.Input<string>;
    /**
     * This field defines the status of the server.
     */
    enabled?: pulumi.Input<boolean>;
    microtenantId?: pulumi.Input<string>;
    /**
     * This field defines the name of the server.
     */
    name?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ApplicationServer resource.
 */
export interface ApplicationServerArgs {
    /**
     * This field defines the domain or IP address of the server.
     */
    address: pulumi.Input<string>;
    /**
     * This field defines the list of server groups IDs.
     */
    appServerGroupIds?: pulumi.Input<pulumi.Input<string>[]>;
    configSpace?: pulumi.Input<string>;
    /**
     * This field defines the description of the server.
     */
    description?: pulumi.Input<string>;
    /**
     * This field defines the status of the server.
     */
    enabled?: pulumi.Input<boolean>;
    microtenantId?: pulumi.Input<string>;
    /**
     * This field defines the name of the server.
     */
    name?: pulumi.Input<string>;
}
