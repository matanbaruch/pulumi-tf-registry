// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ApiManagementCustomDomain extends pulumi.CustomResource {
    /**
     * Get an existing ApiManagementCustomDomain resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ApiManagementCustomDomainState, opts?: pulumi.CustomResourceOptions): ApiManagementCustomDomain {
        return new ApiManagementCustomDomain(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/apiManagementCustomDomain:ApiManagementCustomDomain';

    /**
     * Returns true if the given object is an instance of ApiManagementCustomDomain.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ApiManagementCustomDomain {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ApiManagementCustomDomain.__pulumiType;
    }

    public readonly apiManagementId!: pulumi.Output<string>;
    public readonly developerPortals!: pulumi.Output<outputs.ApiManagementCustomDomainDeveloperPortal[] | undefined>;
    public readonly gateways!: pulumi.Output<outputs.ApiManagementCustomDomainGateway[] | undefined>;
    public readonly managements!: pulumi.Output<outputs.ApiManagementCustomDomainManagement[] | undefined>;
    public readonly portals!: pulumi.Output<outputs.ApiManagementCustomDomainPortal[] | undefined>;
    public readonly scms!: pulumi.Output<outputs.ApiManagementCustomDomainScm[] | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.ApiManagementCustomDomainTimeouts | undefined>;

    /**
     * Create a ApiManagementCustomDomain resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApiManagementCustomDomainArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ApiManagementCustomDomainArgs | ApiManagementCustomDomainState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ApiManagementCustomDomainState | undefined;
            resourceInputs["apiManagementId"] = state ? state.apiManagementId : undefined;
            resourceInputs["developerPortals"] = state ? state.developerPortals : undefined;
            resourceInputs["gateways"] = state ? state.gateways : undefined;
            resourceInputs["managements"] = state ? state.managements : undefined;
            resourceInputs["portals"] = state ? state.portals : undefined;
            resourceInputs["scms"] = state ? state.scms : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as ApiManagementCustomDomainArgs | undefined;
            if ((!args || args.apiManagementId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'apiManagementId'");
            }
            resourceInputs["apiManagementId"] = args ? args.apiManagementId : undefined;
            resourceInputs["developerPortals"] = args ? args.developerPortals : undefined;
            resourceInputs["gateways"] = args ? args.gateways : undefined;
            resourceInputs["managements"] = args ? args.managements : undefined;
            resourceInputs["portals"] = args ? args.portals : undefined;
            resourceInputs["scms"] = args ? args.scms : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ApiManagementCustomDomain.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ApiManagementCustomDomain resources.
 */
export interface ApiManagementCustomDomainState {
    apiManagementId?: pulumi.Input<string>;
    developerPortals?: pulumi.Input<pulumi.Input<inputs.ApiManagementCustomDomainDeveloperPortal>[]>;
    gateways?: pulumi.Input<pulumi.Input<inputs.ApiManagementCustomDomainGateway>[]>;
    managements?: pulumi.Input<pulumi.Input<inputs.ApiManagementCustomDomainManagement>[]>;
    portals?: pulumi.Input<pulumi.Input<inputs.ApiManagementCustomDomainPortal>[]>;
    scms?: pulumi.Input<pulumi.Input<inputs.ApiManagementCustomDomainScm>[]>;
    timeouts?: pulumi.Input<inputs.ApiManagementCustomDomainTimeouts>;
}

/**
 * The set of arguments for constructing a ApiManagementCustomDomain resource.
 */
export interface ApiManagementCustomDomainArgs {
    apiManagementId: pulumi.Input<string>;
    developerPortals?: pulumi.Input<pulumi.Input<inputs.ApiManagementCustomDomainDeveloperPortal>[]>;
    gateways?: pulumi.Input<pulumi.Input<inputs.ApiManagementCustomDomainGateway>[]>;
    managements?: pulumi.Input<pulumi.Input<inputs.ApiManagementCustomDomainManagement>[]>;
    portals?: pulumi.Input<pulumi.Input<inputs.ApiManagementCustomDomainPortal>[]>;
    scms?: pulumi.Input<pulumi.Input<inputs.ApiManagementCustomDomainScm>[]>;
    timeouts?: pulumi.Input<inputs.ApiManagementCustomDomainTimeouts>;
}
