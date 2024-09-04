// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SchemaSiteBdSubnet extends pulumi.CustomResource {
    /**
     * Get an existing SchemaSiteBdSubnet resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SchemaSiteBdSubnetState, opts?: pulumi.CustomResourceOptions): SchemaSiteBdSubnet {
        return new SchemaSiteBdSubnet(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'mso:index/schemaSiteBdSubnet:SchemaSiteBdSubnet';

    /**
     * Returns true if the given object is an instance of SchemaSiteBdSubnet.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SchemaSiteBdSubnet {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SchemaSiteBdSubnet.__pulumiType;
    }

    public readonly bdName!: pulumi.Output<string>;
    public readonly description!: pulumi.Output<string>;
    public readonly ip!: pulumi.Output<string>;
    public readonly noDefaultGateway!: pulumi.Output<boolean>;
    public readonly primary!: pulumi.Output<boolean>;
    public readonly querier!: pulumi.Output<boolean>;
    public readonly schemaId!: pulumi.Output<string>;
    public readonly scope!: pulumi.Output<string>;
    public readonly shared!: pulumi.Output<boolean>;
    public readonly siteId!: pulumi.Output<string>;
    public readonly templateName!: pulumi.Output<string>;
    public readonly virtual!: pulumi.Output<boolean>;

    /**
     * Create a SchemaSiteBdSubnet resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SchemaSiteBdSubnetArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SchemaSiteBdSubnetArgs | SchemaSiteBdSubnetState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SchemaSiteBdSubnetState | undefined;
            resourceInputs["bdName"] = state ? state.bdName : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["ip"] = state ? state.ip : undefined;
            resourceInputs["noDefaultGateway"] = state ? state.noDefaultGateway : undefined;
            resourceInputs["primary"] = state ? state.primary : undefined;
            resourceInputs["querier"] = state ? state.querier : undefined;
            resourceInputs["schemaId"] = state ? state.schemaId : undefined;
            resourceInputs["scope"] = state ? state.scope : undefined;
            resourceInputs["shared"] = state ? state.shared : undefined;
            resourceInputs["siteId"] = state ? state.siteId : undefined;
            resourceInputs["templateName"] = state ? state.templateName : undefined;
            resourceInputs["virtual"] = state ? state.virtual : undefined;
        } else {
            const args = argsOrState as SchemaSiteBdSubnetArgs | undefined;
            if ((!args || args.bdName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'bdName'");
            }
            if ((!args || args.ip === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ip'");
            }
            if ((!args || args.schemaId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'schemaId'");
            }
            if ((!args || args.siteId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'siteId'");
            }
            if ((!args || args.templateName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'templateName'");
            }
            resourceInputs["bdName"] = args ? args.bdName : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["ip"] = args ? args.ip : undefined;
            resourceInputs["noDefaultGateway"] = args ? args.noDefaultGateway : undefined;
            resourceInputs["primary"] = args ? args.primary : undefined;
            resourceInputs["querier"] = args ? args.querier : undefined;
            resourceInputs["schemaId"] = args ? args.schemaId : undefined;
            resourceInputs["scope"] = args ? args.scope : undefined;
            resourceInputs["shared"] = args ? args.shared : undefined;
            resourceInputs["siteId"] = args ? args.siteId : undefined;
            resourceInputs["templateName"] = args ? args.templateName : undefined;
            resourceInputs["virtual"] = args ? args.virtual : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SchemaSiteBdSubnet.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SchemaSiteBdSubnet resources.
 */
export interface SchemaSiteBdSubnetState {
    bdName?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    ip?: pulumi.Input<string>;
    noDefaultGateway?: pulumi.Input<boolean>;
    primary?: pulumi.Input<boolean>;
    querier?: pulumi.Input<boolean>;
    schemaId?: pulumi.Input<string>;
    scope?: pulumi.Input<string>;
    shared?: pulumi.Input<boolean>;
    siteId?: pulumi.Input<string>;
    templateName?: pulumi.Input<string>;
    virtual?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a SchemaSiteBdSubnet resource.
 */
export interface SchemaSiteBdSubnetArgs {
    bdName: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    ip: pulumi.Input<string>;
    noDefaultGateway?: pulumi.Input<boolean>;
    primary?: pulumi.Input<boolean>;
    querier?: pulumi.Input<boolean>;
    schemaId: pulumi.Input<string>;
    scope?: pulumi.Input<string>;
    shared?: pulumi.Input<boolean>;
    siteId: pulumi.Input<string>;
    templateName: pulumi.Input<string>;
    virtual?: pulumi.Input<boolean>;
}
